const express=require("express")
const mongoose=require("mongoose")
const creatPerson=require("./Models/persons")
const app=express()
mongoose
  .connect(
    "mongodb+srv://horchaniwided:wided2023@cluster0.xhiylgq.mongodb.net/PersonContact?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connection is susseful");
  })
  .catch((err) => {
    console.log("ther is an error",err);
  });
  //create person

//Person.create({name:'wided',age:29,favoriteFoods://['pizza','sushi']})

//const person= new Person({name:'laila',age:29,favoriteFoods:['pizza','fastfood']})
//person.save()

// creat many person

/*Person.insertMany([{
    name:'Baha',
    age:30,
    favoriteFoods:['pasta','cookies']
},
{
    name:'Asma',
    age:26,
    favoriteFoods:['cheesecake','takos']
},
{
    name:'Maryam',
    age:25,
    favoriteFoods:['pasta','chiken']
},
])*/
// find person

/*console.log(Person.find().then((res)=>console.log(res)).catch((err)=>console.log(err)))*/ 

/*console.log(Person.findById("641d91dce352fa13fe9dfd32").then((res)=>console.log(res)).catch((err)=>console.log(err)))*/
//console.log(Person.findOne({name:'wided'}).exec()) 
/*Person.findByIdAndUpdate("641d91dce352fa13fe9dfd32",{
    $set:{
        favoriteFoods:favoriteFoods.push("hamburger","pizza"),
    }
}).then((res)=>console.log(res)).catch((err)=>console.log(err))*/

Person.findByIdAndDelete("641d953b53d472d1abf7634a").then((res)=>console.log(res)).catch((err)=>console.log(err))

app.listen(5000,(err)=>{
    if (err)throw err;
    console.log("sever is up and runnign")
})