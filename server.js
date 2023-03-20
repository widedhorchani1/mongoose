const express=require("express")
const mongoose=require("mongoose")
const creatPerson=require("./Models/persons")
const wided= new creatPerson({name:'wided',age:29,favoriteFoods:['pizza','sushi']})
console.log(wided)
wided.save().then((savedWided) => {
  savedWided === wided;
});
const app=express()
mongoose
  .connect(
    "mongodb+srv://horchaniwided:wided2023@cluster0.xhiylgq.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connection is susseful");
  })
  .catch((err) => {
    console.log("ther is an error",err);
  });
  const document=mongoose.model
app.listen(5000,(err)=>{
    if (err)throw err;
    console.log("sever is up and runnign")
})