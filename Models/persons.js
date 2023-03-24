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


