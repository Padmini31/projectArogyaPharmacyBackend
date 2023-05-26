let mongoose = require("mongoose");
mongoose.pluralize(null);
let orderItemSchema = mongoose.Schema({

_id:Number,

item:{
    type:String,
    required:[true,"order item name is required"]
},


Orqty:{
    type:Number,
    required:[true,"quantity of order is required"]
},

description:{
    type:String,
    required:[true,"order item description is required"]
},
price:{
    type:Number,
    required:[true,"order price is required"]
},

product_category:{
    
    type:String,
    required:[true,"product category of order is required"]
},

ordNum:{
    
    type:Number,
    required:[true,"order Num is required"],
    unique:[true,"order num is unique"]
},
cust:{
    type:Number,
    required:true
}

})

let orderitemDetailModel = mongoose.model("order_Items",orderItemSchema);
module.exports = orderitemDetailModel;