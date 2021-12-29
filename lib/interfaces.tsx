// interfaces for typescript

export interface PostItemProps {
    item: Post
}

export interface Post {
    id: number,
    text: string,
    userName: string,
    createdAt: number,
    avatarUrl: string
}