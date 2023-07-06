import React from 'react';
import Markdown from 'markdown-to-jsx'
const DeviceView = ({ visible,  thumbnail, title, content }) => {
    if (visible) {
        return null;
    };
    return (
        <div className='bg-gray-500 bg-opacity-50 fixed inset-0 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white w w-device-width h-device-height rounded overflow-auto'>
                <img src={thumbnail} className='aspect-video' alt=''></img>
                <div className='px-2'>
                    <h1 className='font-semibold text-gray-700 py-2 text-x1'>{title}
                    </h1>
                    <Markdown>{content}
                    </Markdown>
                </div>
            </div>
        </div>
    );
}

export default DeviceView;
