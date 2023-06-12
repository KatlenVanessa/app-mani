const router = require("express").Router();

const multer = require("../middlewares/multer");

const { createPost, deletePost, updatePost, getPost } = require("../controllers/post");

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

router.get('/single//:postId', getPost); 

module.exports = router;

  