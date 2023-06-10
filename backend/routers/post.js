const router = require("express").Router();

const multer = require("../milddlewares/multer");

const { createPost } = require("../controllers/post");

const {postValidator, validate} = require("../milddlewares/postValidator");

const {parseData} = require("../milddlewares/index");

router.post("/create", 
multer.single("thumbnail"),
parseData,
postValidator, 
validate,  
createPost );
//router.get('/api/post/latest');

module.exports = router;

  