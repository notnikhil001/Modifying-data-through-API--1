const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nikhil2311:siVpuw-xenna9-tybvas@cluster0.gkuqx.mongodb.net/");
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
