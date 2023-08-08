const { default: mongoose } = require("mongoose");

const {Schema} = mongoose
const userLock = new mongoose.Schema({
    email:{
      type:String,
      required:true
    },
    name:{
        type:String,
      required:true
    },
    salary:{
        type:Number,
      required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const collageModal = mongoose.model("collage",userLock)  //saved in data mongodb

// Replace this line:
// export default collageModal;

// With this line:
module.exports = collageModal;
