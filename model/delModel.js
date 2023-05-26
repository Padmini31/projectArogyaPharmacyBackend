let mongoose = require("mongoose");
let delSchema = mongoose.Schema({
   
   _id:Number,
   
    delivery_status:{
        type:String,
        required:[true,"Status is required"]
    },
    ordrNum:{
        type:Number,
        required:[true,"order Number is required"],
        unique:[true,"order Number mustbe unique"]
    }

})

let delmodel = mongoose.model("delivery",delSchema);
module.exports=delmodel;