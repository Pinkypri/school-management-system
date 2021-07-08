const  router=require("express").Router();
const Student=require("../../../models").Student;
const Class=require("../../../models").Class;

router.get("/get",(req,res)=>{
    res.send("Student Route Is Working");
    });


    router.post("/data",async(req,res)=>{
        try {
            
            const session=await Student.startSession();
            const user=new Student(req.body);
            
            const studentDetails=await user.save({session:session});

            const classDetails=await Class.findByIdAndUpdate(
             { _id:req.body.classId},
             {
                 $addToSet:{student:studentDetails}
             },
                 
             {new:true},
          
        ).session(session)
           res.json({student:studentDetails,class:classDetails})
        } catch (error) {
            res.json(error)
        }
    });

    router.get("/all",async(req,res)=>{
        try {
            const user=await Student.find({}).select("-_id studentname").populate({path:"classId",select:"classname -_id"})
            .populate({path:"teacherId",select:"teachername contact -_id"});
            
            res.json(user)
        } catch (error) {
            res.json(error)
        }
    })
    
    module.exports=router;
    