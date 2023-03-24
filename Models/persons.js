const mongoose=require("mongoose")
const Schema=mongoose.Schema
const personSchema=new Schema({
name:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
},
favoriteFoods:{
    type:[String]
}
})
module.exports=Person=mongoose.model('Persons',personSchema)
/*const wided= new person({name:'wided',age:29,favoriteFoods:['pizza','sushi']})
console.log(wided)
wided.save().then(savedWided=>{
    savedWided===wided
});*/

