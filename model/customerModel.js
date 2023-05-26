let mongoose = require("mongoose");
let customerSchema = mongoose.Schema({

_id:Number,

cname:{
    type:String,
    required:[true,"customer name is required"]
},


gender:{
    type:String,
    required:[true,"customer gender is required"]
},

contact_Num:{
    type:Number,
    required:[true,"customer contact no. is required"]
},
address:{
    type:String,
    required:[true,"customer address is required"]
}

})

let customerModel = mongoose.model("customer",customerSchema);
module.exports = customerModel;