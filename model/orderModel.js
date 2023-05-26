let mongoose = require("mongoose");
mongoose.pluralize(null);
let orderSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    ordrNum: {       // writinh h 
        type: Number,
        required: [true, "order Number is required"],
        unique: [true, "order number must b unique"]
    },

    ordrDt: {       // writinh how many and what type of feilds we want to set in the record. feild names and inside that their own rules. 
        type: String,
        required: [true, "order date is required"],

    },

    custId: {
        type: Number,
        required: [true, "customer id is required"]
    },

    deliveryDt: {
        type: String,
        required: [true, "Delivery date must be required"],

    },

    deliveryTime: {
        type: String,
        required: [true, "Delivery time is required"]

    }


})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
