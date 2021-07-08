const  router=require("express").Router();


const Class =require("../../../models").Class;
const Teacher=require("../../../models").Teacher;
 
 router.get("/get",(req,res)=>{
     res.send("Class Route Is Working");
     });


router.post("/data",async(req,res)=>{
    try {
        const user=await Class.create(req.body);
        if(user){
        res.json(user);
        }
    } catch (error) {
        res.json(error)
    }
});

router.post("/update/:id",async(req,res)=>{
    try {
     
        
       // const session=await Class.startSession();

        const user=new Class(req.body);
       
      const find=await Class.find({_id:req.params.id});
      console.log(find);
      
        const mentorDetails=await Class.findByIdAndUpdate(
         { _id:req.params.id},
        {$push: {teacher:req.body.teacher}})
             
           res.json({mentorDetails})
    } catch (error) {
        res.json(error)
    }
});
   

router.get("/all",async(req,res)=>{
    try {
        const user=await Class.find({}).select("-_id classname").populate({path:"student",select:"studentname enrollmentDate -_id"})
        .populate({path:"teacher",select:"teachername qualification -_id"});
        
        res.json(user)
    } catch (error) {
        res.json(error)
    }
})
    
module.exports=router;