const mongoose=require("mongoose");

const teacherSchema= new mongoose.Schema({
    teachername:{
        type:String,
        required:true,
    },
   
    qualification:{
        type:String,
        required:true,
        
    },
    
    experience:{
        type:Number,
        default:0,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    }
   
},{
    timestamps:true,
});
const Teacher=mongoose.model("teachers",teacherSchema);

module.exports=Teacher;