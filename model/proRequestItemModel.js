let mongoose = require("mongoose");
mongoose.pluralize(null);

let prodReqItemSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    RequestNo: {
        type: Number,
        required: [true, "Product Request number is required"],
        unique: true
    },

    requested_Items: {
        type: String,
        required: [true,"Product Request ITEMS is required"]
    }


})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let productReqItemsModel = mongoose.model("product_Request_Items", prodReqItemSchema);

module.exports = productReqItemsModel;
