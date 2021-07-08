const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    studentname:{
        type:String,
        required:true,
    },
   
    enrollmentDate:{
        type:Date,
  requires:true,
        
    },
    classId:{
        type:mongoose.Types.ObjectId,
        ref:"classs",
        
    },
    teacherId:{
        type:mongoose.Types.ObjectId,
        ref:"teachers",
        
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    }
   
},{
    timestamps:true,
});
const Student=mongoose.model("students",studentSchema);

module.exports=Student;