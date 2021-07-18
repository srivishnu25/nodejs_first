const express = require('express')
const app = express()


//urls

app.get('/home',(req,res)=>res.send('HOME PAGE..'))
app.get('/movie',(req,res)=>res.send('MOVIE PAGE...'))
app.get('/cricket',(req,res)=>res.send('CRICKET PAGE...'))
app.get('/home/:id',(req,res)=>{
    const id= req.params.id
    res.send('u have typed ' + id)
})
app.get('*',(req,res)=>res.status(404).send('Error...'))
app.listen(3000,()=>console.log('server started'))
// function logger (req,res,next){
//     console.log(req.originalUrl)
//     console.log('loading')
//     next()
// }
// function auth(req,res,next){
//     if(req.query.vishnu === 'true'){
//         req.vishnu=true
//         next()
//     }
//     else
//     res.send('No auth')
// }

// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology: true } )
// .then(()=>console.log('connected to mongodb...'))
// .catch(err=>console.error('couldnt connect',err))

// const courseSchema = new mongoose.Schema({
//     name:String,
//     author:String,
//     price:Number,
//     isPublished:Boolean,
//     date:{type:Date,default:Date.now}
    
// })

// const Course = mongoose.model('Course',courseSchema)
// async function create(){
//     const course = new Course({
//         name:'node.js course',
//         author:"vishnu",
//         isPublished:true,
//         price:20
//     })
//     await course.save()
// }
// create()
// app.get('/courses/:id',async(req,res)=>{
//     var myId= req.params.id
//     const result= await Course.find().sort({author:-1}).limit(1).select({name:1})
//     const result1=await Course.find({_id: myId})
//     res.status(200).json(result1)
// })
// app.listen(3001,()=>console.log('server started'))