const userModel = require('../model/User');
const postModel = require('../model/Post');
const { post } = require('../routes/auth');

// CREATE POST
const createPost = async(req,res)=>{
    try {
        const {  title,  desc,  photo, categories, username } = req.body;
        const newPost = new postModel({ title,  desc, username });
        const savedPost = await newPost.save();
        res.status(200).json({message:"post  created succefully", savedPost})
    } catch (error) {
       
            res.status(500).json({message:"error",error})
        
       
    }

}
//UPDATE POST
const updatePost = async (req,res)=>{
    const {id}= req.params;
    const {username}= req.body;
   try {
    const post = await postModel.findById(id);
    if (post.username === username) {
        try {
            const updatedPost =  await postModel.findByIdAndUpdate(id,{
                $set: req.body
            },{new:true})
            res.status(200).json({message:"post update succefully",updatedPost})
        } catch (error) {
            res.status(401).json("post didn't update")  
        }
        
    } else {
        res.status(401).json("You can update only your post!")
    }
    
   } catch (error) {
    res.status(500).json(error)
   }
  


}
// DELETE POST
const deletePost = async (req,res)=>{
    const {id}= req.params;
    const {username} = req.body
   try {
    const post = await postModel.findById(id);
    if (post.username === username) {
        await post.delete();
        res.status(200).json("Post has been deleted....")
        
    } else {
       res.status(401).json("You can delete your post only") 
    }
    
   } catch (error) {
    res.status(500).json({messgae:"in catch", error})
    
   }
    
       
}
// GET  POST
const getPost =  async(req,res)=>{
    try {
        const {id} = req.params
        const post = await postModel.findById(id);
        if (post) {
            res.status(200).json({message:"get post succesfully",post})
        } else {
            res.json(400).json({message:"post not found"})
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

// GET  All  POST
const getAllPosts =  async(req,res)=>{
    try {
        const {id} = req.params
        const post = await postModel.findById(id);
        if (post) {
            res.status(200).json({message:"get post succesfully",post})
        } else {
            res.json(400).json({message:"post not found"})
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getAllPosts
   
}