const  router=require("express").Router();
const Teacher=require("../../../models").Teacher;


router.get("/get",(req,res)=>{
    res.send("Teacher Route Is Working");
    });


    
router.post("/data",async(req,res)=>{
    try {
        const teacher=await Teacher.create(req.body);
        if(teacher){
        res.json(teacher);
        }
    } catch (error) {
        res.json(error)
    }
});

module.exports=router;