import React from 'react';

const PostCard = ({ post }) => {
    if (!post) {
        return
    }
    const { title, thumbnail, tags, meta, createAt, slug } = post;
    return (
        <div>
            <img src={thumbnail || 'logo192.png'} alt={title} />
            <h1>title</h1>
            <p>{meta}</p>

            <p>{createAt}</p>
            <p>{tags.join(", ")}</p>
        </div>
    );
}

export default PostCard;
