const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ps5840432:gRC9epPJ22Yly2Rm@cluster0.vnxr1.mongodb.net/");
const UserSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    }
    
})

module.exports=mongoose.model("user",UserSchema);