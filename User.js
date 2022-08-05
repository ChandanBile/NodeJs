import mongoose from "mongoose";


const User = new mongoose.Schema({
    username: String,
    password: String,
    email:{
        type: String,
        lowercase : true
    },
    regDate : {
        type : Date,
        default : Date.now
    }
})

export default mongoose.model('Users', User)