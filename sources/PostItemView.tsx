import React from "react";
import { 
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";
import { PostItemProps } from "../lib/interfaces"

// Post Item Cell View Class
export default class PostItemView extends React.PureComponent<PostItemProps> { // Use PureComponent to avoid re-rendering cycles (performance optimization)

    render() {
        const { 
            createdAt,
            avatarUrl,
            userName,
            text
        } = this.props.item // properties from post interface
        const dateDisplay = new Date(createdAt).toISOString().slice(0, 16).replace(/-/g, "/").replace("T", " ") // format time to "YYYY/mm/dd hh:m"

        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <Image source={{uri: avatarUrl}} style={styles.avatar}/> 
                    <Text style={styles.title}>{userName}</Text>
                </View>
                <Text style={styles.body}>{text}</Text>
                <Text style={styles.date}>{dateDisplay}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        justifyContent: "center",
        padding: 16
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginEnd: 16
    },
    title: {
        fontSize: 18,
    },
    body: {
        fontSize: 18,
        marginVertical: 24
    },
    date: {
        flex: 1,
        color: "black",
        fontSize: 12,
        alignSelf: "flex-end"
    }
})