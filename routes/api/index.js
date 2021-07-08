const router=require("express").Router();
const classRouter=require("./class");
const studentRouter=require("./student");
const teacherRouter=require("./teacher");

router.use("/class",classRouter);
router.use("/student",studentRouter);
router.use("/teacher",teacherRouter);

module.exports=router;