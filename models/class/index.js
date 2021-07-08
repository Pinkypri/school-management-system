const mongoose=require("mongoose");

const classSchema= new mongoose.Schema({
    classname:{
        type:String,
        required:true,
    },
   
    student:[{
        type:mongoose.Types.ObjectId,
        ref:"students",
        
    }],
    teacher:[{
        type:mongoose.Types.ObjectId,
        ref:"teachers",
        
    }],
   
},{
    timestamps:true,
});
const Class=mongoose.model("classs",classSchema);

module.exports=Class;