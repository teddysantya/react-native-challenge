// methods for API request isolated here

export default {
    getPost: (page: number) => {
        return fetch('http://localhost:3001/posts?_page=' + page)
    }
}