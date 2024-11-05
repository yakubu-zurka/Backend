import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },

    email:{
        type:String,
        require: true
    },

    address:{
        type:String,
        require: true
    }
})

export default mongoose.model('users', UserSchema);