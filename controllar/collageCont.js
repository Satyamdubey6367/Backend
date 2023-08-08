const collageModal = require('../Modal/collageModal');

// Get method ----------------------------------------------------

  const  userFetch = async(req,res) =>
{
   try{
       let  data = await collageModal.find({})
        console.log(data);
        res.json(data)
   }catch(err){
    res.json(err)
   }
   

}


//  POst Method  ----------------------------------------------

 const userCreate = async(req,res)=>{
    console.log(req.body)
   try{
   let  data = new collageModal(req.body)
     await  data.save()
   res.json(data)
   }catch(err){
       res.json("err")
   }
}



//  put method -----------------------------------
 
 const userUpdate = async(req,res)=>{
   const{_id}= req.params
   console.log(_id,req.body);
   // console.log(req.body)
   try{
       let data =  await collageModal.findByIdAndUpdate(
           _id,req.body
       )
       console.log(data)
       // await data.save()
       res.json(data)
   }catch(error){
       console.log(error)
       res.json(error)
   }

   }
   

// delete method -----------------------------

  const userDelete = async(req,res)=>{
  
   console.log(req.params)
   try{
       const deleteData =  await collageModal.findByIdAndDelete(req.params.id)
       if(deleteData){
        
       res.send(deleteData)
       console.log(deleteData)
   }

   }catch(error){
        res.send(error)
   }
}


module.exports = {
    userFetch,userCreate,userUpdate,userDelete
};