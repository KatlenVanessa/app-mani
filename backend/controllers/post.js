const Post = require('../models/post');
const FeaturedPost = require('../models/featuredPost');
const cloudinary = require('../cloud')

const FEATURED_POST_COUNT = 4;

const addToFeaturedPost = async (postId) => {
    const featuredPost = new FeaturedPost({post: postId})
    await featuredPost.save();

    const featuredPosts = await FeaturedPost.find({}).sort({createAt: -1})

    featuredPosts.forEach(async(post, index) => {
        if(index >= FEATURED_POST_COUNT){
            await FeaturedPost.findByIdAndDelete(post._id)
        }
    });
};

exports.createPost = async (req, res) => {
    const {title, content, meta, tags, author, slug, featured} = req.body;
    const {file} = req
    const newPost =  new Post({title, content, meta, tags, author, slug});

   

    if (file) {
        cloudinary
    }

    await newPost.save();

    if (featured) {
        await addToFeaturedPost(newPost._id)
    }

    res.json(newPost);

};