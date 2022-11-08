
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    profilePic:{
        type: String, 
        default: "",
    }
},{timestamps:true})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password,parseInt(process.env.saltRound)),
    next()
})
const userModel = mongoose.model('User',userSchema)

module.exports = userModel