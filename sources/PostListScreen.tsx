import React from "react";
import { 
    FlatList, 
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";
import PostItemView from "./PostItemView";
import { Post } from "../lib/interfaces"
import api from "../lib/api";

// List of Post Screen Class
export default class PostListScreen extends React.Component {

    // initial state
    state = {
        data: [], // array of post for flatlist
        page: 1, // current page for next fetch post API request
        hasNext: true, // flag to determine should load more on scroll to end
        refreshing: true // flag to determine user pull to refresh
    }

    // request posts on page load
    componentDidMount() {
        this._fetchPosts()
    }

    render() {
        const { data, refreshing } = this.state
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <FlatList<Post> // Use FlatList to handle large data for performance
                    data = {data}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                    style = {styles.flatList}
                    ItemSeparatorComponent = {this._renderSeparator}
                    onEndReached = {this._onEndReached}
                    onEndReachedThreshold = {0.5}
                    refreshing = {refreshing}
                    onRefresh = {this._onRefresh}
                    maxToRenderPerBatch = {5}
                    removeClippedSubviews = {true}
                />
            </SafeAreaView>
        )
    }

    // flatlist item rendering
    _renderItem = ({item}: {item: Post}) => {
        return <PostItemView item={item}/>
    }

    // key for render each unique cell to optimize rendering
    _keyExtractor = (item: Post) => 'item_' + item.id;

    // separator view for each cell
    _renderSeparator = () => {
        return (
          <View style={styles.separator}/>
        );
    };

    // handle pull to refresh
    _onRefresh = () => {
        this.setState({
            hasNext: true,
            page: 1,
            refreshing: true
        }, this._fetchPosts)
    }

    // handle pagination
    _onEndReached = () => {
        const { hasNext, page } = this.state
        
         // check whether should load more
        if (hasNext) {
            // fetch next page
            this.setState({
                page: page + 1
            }, this._fetchPosts)
        }
    }

    // api request
    _fetchPosts = () => {
        const {page, data, refreshing} = this.state

        api.getPost(page)
        .then((response) => response.json())
        .then((posts: [Post]) => {
            let newData = []
            if (refreshing) {
                newData = posts // replace data with new response
            }
            else {
                newData = [...data, ...posts] // append new response to current data
            }
            this.setState({
                data: newData,
                refreshing: false,
                hasNext: posts.length > 0 // stop load more if API doesn't give response
            })
        })
        .catch((error) => {
            // something went wrong; show error and prevent load more
            this.setState({
                hasNext: false,
                refreshing: false
            }, () => {
                alert(error)
            })
        })
    }

}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center"
    },
    flatList: {
        flex: 1
    },
    separator: {
        height: 8,
        backgroundColor: "whitesmoke"
    }
})