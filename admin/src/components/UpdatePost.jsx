import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import { useParams } from "react-router-dom"
import { useNotification } from "../context/NotificationProvider";
import { getPost, updatePost } from "../api/post";
import NotFound from "./NotFound";

export default function UpdatePost() {
    const { slug } = useParams();
    const { updateNotification } = useNotification();
    const [notFound, setNotFound] = useState(false);
    const [postInfo, setPostInfo] = useState(null);
    const [busy, setBusy] = useState(false);

    const fetchPost = async () => {
        console.log(slug);
        const { error, post } = await getPost(slug)
        if (error) {
            setNotFound(true);
            return updateNotification('error', error);
        }
        console.log(post);
        setPostInfo({ ...post, tags: post.tags?.join(', ') });
    };

    useEffect(() => {
        fetchPost();
    });

    const handleSubmit = async (data) => {
        setBusy(true);
        const { error, post } = await updatePost(postInfo.id, data);
        setBusy(false);
        if (error) {
            return updateNotification('error', error);
        }
        setPostInfo({...post, tags: post.tags?.join(', ') });
    };

    if (notFound) {
        return <NotFound></NotFound>;
    }
    return (
        <PostForm onSubmit={handleSubmit} initialPost={postInfo} busy={busy} postBtnTitle="Update" resetAfterSubmit></PostForm>
    )
}