const userModel = require("../model/User");
const bcrypt = require('bcrypt');

const signup = async (req,res)=>{
    try {
        const { username, email, password } = req.body;
        const newUser = new userModel({ username, email, password });
        const savedUser = await newUser.save();
        res.status(200).json({message:"user added succefully", savedUser})
    } catch (error) {
        if(error.keyValue){
            res.status(500).json({message:"email already exist"})
        }else {
            res.status(500).json({message:"error",error})
        }
       
    }

 

}
const signin = async (req,res)=>{
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({username});
        if (!user) {
            res.status(400).json({message:"in-valid username"});
        } else {
            const match = await bcrypt.compare(password,user.password);
            if (match) {
                const {password, ...others} = user._doc
                res.json({ message: "user login sucessfully", others })
            } else {
                res.json({ message: "in-valid email or password" })
            }
            
        }
    } catch (error) {
       res.status(500).json({messgae:"in catch", error})
       
    }

 

}

module.exports = {
    signup,
    signin 
}