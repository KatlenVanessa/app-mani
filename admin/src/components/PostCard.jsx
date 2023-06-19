import React from 'react';
import dateFormat from 'dateformat';

const PostCard = ({ post }) => {
    if (!post) {
        return null;
    }
    const { title, thumbnail, tags, meta, createdAt, slug } = post;
    return (
        <div>
            <img src={thumbnail || './logo192.png'} alt={title} />
            <h1 className='text-lg font-semibold text-gray-700'>{title}</h1>
            <p className='text-gray-500'>{meta}</p>

            <div className='flex justify-between'>
            <p className=' text-gray-500 text-small'>{dateFormat(createdAt, 'mediumDate')}</p>
            {/* <p className=' text-gray-500 text-small'>{tags.join(', ')}</p> NAO FUNCIONA*/}
            </div>
        </div>
    );
}

export default PostCard;
