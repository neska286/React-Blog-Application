const userModel = require('../model/User');
const postModel = require('../model/Post');
const bcrypt = require('bcrypt');

const updateUser = async (req,res)=>{
    const {id}= req.params;
    const {userId}= req.body;
    const {password}= req.body;
    if(id===userId){
        const salt = await  bcrypt.genSalt(process.env.saltRound);
        password = await bcrypt.hash(password , salt)
    }
  
    try {
        const updateUser = await userModel.findByIdAndUpdate(id,{
            $set:req.body,
        },{new:true})
        if (updateUser) {
            res.status(200).json({message:"user updated susseccfully",updateUser})
        } else {
            res.status(500).json({message:"user not updated"})
            
        }
  
    } catch (error) {
       res.status(500).json({messgae:"in catch", error})
       
    }


}

const deleteUser = async (req,res)=>{
    const {id}= req.params;
        try {
            const user = await userModel.findById(id);
            if (user) {
                const deletePosts = await postModel.deleteMany({username : user.username})
                const deleteUser = await userModel.findByIdAndDelete(id);
                if (deleteUser) {
                    res.status(200).json({message:"user deleted susseccfully", deleteUser})
                } else {
                    res.status(500).json({message:"user not deleted"})
                    
                }
                
            } else {
                res.status(404).json({message:"user not found"})                
            }
         
      
        } catch (error) {
           res.status(500).json({messgae:"in catch", error})
           
        }
       
}

const getuser =  async(req,res)=>{
    try {
        const {id} = req.params
        const user = await userModel.findById(id);
        if (user) {
            const {password, ...others} = user._doc
            res.status(200).json({message:"get user succesfully",others})
        } else {
            res.json(400).json({message:"user not found"})
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports = {
    updateUser,
    deleteUser,
    getuser
   
}