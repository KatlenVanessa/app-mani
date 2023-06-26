import React from "react";
import { ImSpinner11, ImEye, ImFilePicture, ImFilesEmpty } from 'react-icons/im'

export default function CreatePost() {
    return (
        <form className="p-2">
            <div className="w-9/12 h-screen space-y-3 flex flex-col">
                {/* title and submit */}
            <div className="flex items-center justify-between">
                <h1 className="text-x1 font-semibold text-gray-700">Crie uma nova postagem</h1>

                <div className="flex items-center space-x-5">
                    <button className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"><ImSpinner11></ImSpinner11><span>Reset</span></button>
                    <button className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"><ImEye></ImEye><span>View</span></button>
                    <button className="h-10 w-36 px-5 hover:ring-1 bg-blue-500 rounded text-white hover:bg-blue-500 hover:bg-transparent ring-blue-500 transition">Post</button>
                </div>
            </div>
            {/* featured checkbox */}
            <div>
                <input id='featured' type="checkbox" hidden></input>
                <label className='flex items-center space-x-2 text-gray-700' htmlFor='featured'>
                    <div className="w-4 h-4 rounded-full border-2 border-gray-700 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    </div>
                    <span className="group-hover:gb-blue-500">Destaques</span>
                </label>
            </div>
            {/* title input */}
            <div>
                <input type='text' className="text-x1 outline-none focus:ring-1 rounded p-2 w-full font-semibold" placeholder="Título da Postagem" ></input>
            </div>
            {/* image input */}
            <div className="flex space-x-2">
                <div>
                    <input id="image-input" type="file" hidden></input>
                    <label className="flex items-center space-x-2 px-3 ring-1 ring-gray-700 rounded h-10 text-gray-700  hover:text-white hover:bg-gray-700 transition cursor-pointer">
                        <span>
                            Place image
                        </span>
                        <ImFilePicture></ImFilePicture>
                    </label>
                </div>

                <div className="flex-1 flex bg-gray-400 rounded overflow-hidden">
                    <input type='text'
                        value='link'
                        className="bg-transparent px-2 text-white w-full"
                        disabled></input>
                    <button className="text-xs flex flex-col items-center justify-center p-1 self-stretch bg-gray-700 text-white">
                        <ImFilesEmpty></ImFilesEmpty>
                        copy
                    </button>
                </div>
            </div>

            <div>
                <textarea className='resize-none outline-none focus:ring-1 rounded p-2 w-full h-30 font-semibold flex-1 font-mono tracking-wide text-lg' placeholder="## Markdown"></textarea>
            </div>

            {/* tags input */}
            <div>
                <label htmlFor='tags'>Tags</label>
                <input type='text' id="tags" className="outline-none focus:ring-1 rounded p-2 w-full" placeholder="Título da Postagem" ></input>
            </div>

            {/* meta description input */}
            <div>
                <label htmlFor='meta'>Meta description</label>
                <textarea id='meta' className='resize-none outline-none focus:ring-1 rounded p-2 w-full' placeholder="Meta description"></textarea>
            </div>
            </div>
        </form>
    );
}