import React, { useEffect, useState } from "react";
import { ImSpinner11, ImEye, ImFilesEmpty, ImFilePicture, ImSpinner3 } from 'react-icons/im'
import { uploadImage } from "../api/post";
import { useNotification } from "../context/NotificationProvider";
import MarkdownHint from "./MarkdownHint";
import DeviceView from "./DeviceView";

export const defaultPost = {
    title: "",
    thumbnail: "",
    featured: false,
    content: "",
    tags: "",
    meta: ""
}

export default function PostForm({ initialPost, busy, postBtnTitle, resetAfterSubmit, onSubmit }) {
    const [postInfo, setPostInfo] = useState({ ...defaultPost });
    const [selectedThumbnailURL, setSelectedThumbnailURL] = useState('');
    const [imageUrlToCopy, setImageUrlToCopy] = useState('');
    const [imageUploading, setImageUploading] = useState(false);
    const { updateNotification } = useNotification();
    const [displayMarkdownHint, setDisplayMarkdownHint] = useState(false);
    const [showDeviceView, setShowDeviceView] = useState(false);

    useEffect(() => {
        if (initialPost?.thumbnail) {
            setSelectedThumbnailURL(initialPost?.thumbnail);
        }
        setPostInfo({ ...initialPost });
        return () => {
            if (resetAfterSubmit) {
                resetForm();
            };
        };
    }, [initialPost, resetAfterSubmit]);

    const handleChange = ({ target }) => {
        const { value, name, checked } = target;

        if (name === 'thumbnail') {
            const file = target.files[0];
            if (!file.type?.includes('image')) {
                return alert('this is not an image')
            }
            setPostInfo({ ...postInfo, thumbnail: file });
            return setSelectedThumbnailURL(URL.createObjectURL(file));
        }

        if (name === 'featured') {
            localStorage.setItem('blogPost', JSON.stringify({ ...postInfo, featured: checked }));
            return setPostInfo({ ...postInfo, [name]: checked });
        };

        if (name === 'tags') {
            const newTags = tags.split(", ");//Decidir se vai ser ', ' ou ','
            if (newTags.length > 4) {
                updateNotification('warning', 'Only first four tags will be selected');
                console.log("Only first four tags will be selected");
            };

        }

        if (name === 'meta' && meta.length >= 150) {
            return setPostInfo({ ...postInfo, meta: value.substring(0, 149) });
        }

        const newPost = { ...postInfo, [name]: value };
        setPostInfo({ ...newPost });
        localStorage.setItem("blogPost", JSON.stringify(newPost));
    };

    const handleImageUpload = async ({ target }) => {
        if (imageUploading) {
            return;
        }

        const file = target.files[0];
        if (!file.type?.includes('image')) {
            return updateNotification('error', 'this is not an image');
        }
        setImageUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        const { error, image } = await uploadImage(formData);
        setImageUploading(false);
        if (error) {
            return updateNotification("Error", error);
        }
        setImageUrlToCopy(image);
    };

    const handleOnCopy = () => {
        const textToCopy = `![Add image description](${imageUrlToCopy})`;
        navigator.clipboard.writeText(textToCopy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, content, tags, meta } = postInfo;
        if (!title.trim()) {
            return updateNotification("error", "Title is missing");
        }
        if (!content.trim()) {
            return updateNotification("error", "Content is missing");
        }
        if (!tags.trim()) {
            return updateNotification("error", "Tags are missing");
        }
        if (!meta.trim()) {
            return updateNotification("error", "Meta description is missing");
        }
        const slug = title.toLowerCase().replace(/[^a-zA-Z ]/g, ' ').split(" ").filter(item => item.trim()).join("-");//ARRUMAR O PROBLEMA DO REGEX PARA PT BR
        const newTags = tags.split(",").map((item) => item.trim()).splice(0, 4);

        const formData = new FormData();
        const finalPost = { ...postInfo, tags: JSON.stringify(newTags), slug };
        for (let key in finalPost) {
            formData.append(key, finalPost[key]);
        }

        onSubmit(formData);
        if (resetAfterSubmit) {
            resetForm();
        }

    };

    const resetForm = () => {

        setPostInfo({ ...defaultPost });

        localStorage.removeItem("blogPost");
    };

    const { title, featured, content, tags, meta } = postInfo;
    return (
        <>
            <form onSubmit={handleSubmit} className="p-2 flex">
                <div className="w-9/12 h-screen space-y-3 flex flex-col">
                    {/* title and submit */}
                    <div className="flex items-center justify-between">
                        <h1 className="text-x1 font-semibold text-gray-700">Crie uma nova postagem</h1>

                        <div className="flex items-center space-x-5">
                            <button onClick={() => resetForm()} type="button" className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"><ImSpinner11></ImSpinner11><span>Reset</span></button>
                            <button onClick={() => setShowDeviceView(true)} type="button" className="flex items-center space-x-2 px-3 ring-1 ring-blue-500 rounded h-10 text-blue-500 hover:text-white hover:bg-blue-500 transition"><ImEye></ImEye><span>View</span></button>
                            <button className="h-10 w-36 px-5 hover:ring-1 bg-blue-500 rounded text-white hover:bg-blue-500 hover:bg-transparent ring-blue-500 transition">{busy ? <ImSpinner3 className="animate-spin mx-auto text-xl" /> : (postBtnTitle)}</button>
                        </div>
                    </div>
                    {/* featured checkbox */}
                    <div className="flex">
                        <input name="featured" value={featured} onChange={handleChange} id='featured' type="checkbox" hidden></input>
                        <label className='select-none flex items-center space-x-2 text-gray-700' htmlFor='featured'>

                            <div className="w-4 h-4 rounded-full border-2 border-gray-700 flex items-center justify-center group-hover:border-blue-500">
                                {featured && (<div className=" w-2 h-2 rounded-full bg-gray-700  group-hover:border-blue-500"></div>)}
                            </div>

                            <span className="group-hover:gb-blue-500">Destaques</span>
                        </label>
                    </div>
                    {/* title input */}
                    <div>
                        <input value={title} onFocus={() => setDisplayMarkdownHint(false)} name='title' onChange={handleChange} type='text' className="text-x1 outline-none focus:ring-1 rounded p-2 w-full font-semibold" placeholder="Título da Postagem" ></input>
                    </div>
                    {/* image input */}
                    <div className="flex space-x-2">
                        <div></div>

                        <div>
                            <input onChange={handleImageUpload} id="image-input" type="file" hidden></input>
                            <label htmlFor="image-input" className="flex items-center space-x-2 px-3 ring-1 ring-gray-700 rounded h-10 text-gray-700  hover:text-white hover:bg-gray-700 transition cursor-pointer">
                                <span>
                                    Escolher Imagem
                                </span>
                                {!imageUploading ? (<ImFilePicture></ImFilePicture>) : (<ImSpinner3 className="animate-spin"></ImSpinner3>)}
                            </label>
                        </div>

                        {imageUrlToCopy && (<div className="flex-1 flex bg-gray-400 rounded overflow-hidden">
                            <input type='text'
                                value={imageUrlToCopy}
                                className="bg-transparent px-2 text-white w-full"
                                disabled></input>
                            <button onClick={handleOnCopy} type="button" className="text-xs flex flex-col items-center justify-center p-1 self-stretch bg-gray-700 text-white">
                                <ImFilesEmpty></ImFilesEmpty>
                                copy
                            </button>
                        </div>)}
                    </div>
                    {/* text input */}
                    <div>
                        <textarea value={content} onChange={handleChange} onFocus={() => setDisplayMarkdownHint(true)} name="content" className='resize-none outline-none focus:ring-1 rounded p-2 w-full font-semibold flex-1 font-mono tracking-wide text-lg h-80' placeholder="Conteudo da postagem"></textarea>
                    </div>

                    {/* tags input */}
                    <div>
                        <label className="text-gray-500" htmlFor='tags'>Tags</label>
                        <input onChange={handleChange} value={tags} name="tags" type='text' id="tags" className="outline-none focus:ring-1 rounded p-2 w-full" placeholder="Tag one, tag two" ></input>
                    </div>

                    {/* meta description input */}
                    <div>
                        <label className="text-gray-500" htmlFor='meta'>Meta description {meta?.length} / 150</label>
                        <textarea onChange={handleChange} value={meta} name="meta" id='meta' className='resize-none outline-none focus:ring-1 rounded p-2 w-full' placeholder="Meta description"></textarea>
                    </div>
                </div>

                <div className="w-1/4 px-2 relative">
                    <h1 className="text-x1 font-semibold text-gray-700 mb-2">Thumbnail</h1>
                    <div>
                        <input onChange={handleChange} name="thumbnail" id="thumbnail" type='file' hidden></input>
                        <label className="cursor-pointer" htmlFor="thumbnail">
                            {selectedThumbnailURL ? (
                                <img src={selectedThumbnailURL}
                                    className="aspect-video shadow-sm rounded"
                                    alt="">
                                </img>
                            ) : (
                                <div className="border border-dashed border-gray-500 aspect-video text-gray-500 flex flex-col justify-center items-center">
                                    <span>Select Thumbnail</span>
                                    <span className="text-xs">Recommended</span>
                                    <span className="text-xs">1280 * 720</span>

                                </div>)}
                        </label>
                    </div>

                    {/* Markdown rules*/}
                    <div className=" absolute top-1/2 -translate-y-1/2">
                        {displayMarkdownHint && <MarkdownHint></MarkdownHint>}
                    </div>


                </div >
            </form >
            <DeviceView title={title} content={content} thumbnail={selectedThumbnailURL} visible={showDeviceView} onClose={() => { setShowDeviceView(false) }}></DeviceView>
        </>
    );
}