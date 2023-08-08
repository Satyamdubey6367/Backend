const { userFetch, userCreate, userUpdate, userDelete } = require('./controllar/collageCont');

const express = require('express')
const bodyParser=require('body-parser')  //middleware
const mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://satyamdubey6367:Satyam123@cluster0.pdmwztb.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true,
   useUnifiedTopology: true
}).then((res)=>{
     console.log("connected")
}).catch((err)=>{
    console.log(err)
})







app.get('/rounds',userFetch) 



app.post('/userPost',userCreate)

 
app.put('/userput/:_id',userUpdate)


app.delete('/userdelete/:id', userDelete)

   
//  Server -------------------------------@@@@@@@@@@@@@@@@
 
 app.listen(3009,(error)=>{
    if(!error){
        console.log("run server");
    }
    else{
        console.log(error);
    }
 })