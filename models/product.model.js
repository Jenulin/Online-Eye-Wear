const mongoose=require('mongoose');

const ExampleSchema = mongoose.Schema(
    {
      name:{
        type:String,
        required: [true, "Please enter product name"]

      },
      
      price:{
        type:Number,
        required:true,
        default:0
      },
      image:{
        type:String,
        required:false
      },
    },
      {
        timestamp:true,
      }
);
const example = mongoose.model("example",ExampleSchema);

module.exports=example;