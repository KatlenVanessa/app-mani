const router = require("express").Router();

const multer = require("../middlewares/multer");

const { createPost, deletePost, updatePost, getPost, getFeaturedPost, getFeaturedPosts } = require("../controllers/post");

const {postValidator, validate} = require("../middlewares/postValidator");

const {parseData} = require("../middlewares/index");


router.post("/create", 
multer.single("thumbnail"),
parseData,
postValidator, 
validate,  
createPost );

router.put("/:postId", 
multer.single("thumbnail"),
parseData,
postValidator, 
validate,  
updatePost );

router.delete('/:postId', deletePost); 

router.get('/single/:postId', getPost); 

router.get('/featured-posts', getFeaturedPosts); 

module.exports = router;

  