const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected to mongodb succesfully")
}).catch((err)=>
{
    console.log(err)
})

const student = mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number

})

const Student = new mongoose.model("Student",student);

const adder = async ()=>{

    const ss = await Student.create({
        name:"Laxita",
        workout:"true",
        height:5.5});
   console.log(ss)
    } 

 adder();