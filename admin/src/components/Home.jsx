import React, { useEffect, useState } from "react";
import { getPosts } from "../api/post";

let pageNo = 0
const POST_LIMIT = 9

export default function Home() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const { error, posts } = await getPosts(pageNo, POST_LIMIT);

        if (error) {
            return console.log(error);

        }

        setPosts(posts);
    };

    useEffect(() => {
        fetchPosts()
    }, []);
    return <div>{
        posts.map(post => {
            return <div>{post.title}</div>
        })
    }</div>;
}