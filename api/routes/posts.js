const { createPost, updatePost, deletePost, getPost } = require('../controller/post.controller');

const router = require('express').Router();


router.post('/', createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);
router.get('/:id',getPost)



module.exports = router