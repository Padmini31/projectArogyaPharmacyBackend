let mongoose = require("mongoose");
mongoose.pluralize(null);
let productRequestSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    requestNo: {      
        type: Number,
        required: [true, "Product Request number is required"],
        unique:true
    },

    pharmacy_Address: {
        type: String,
        required: [true, "address is required"]
    }

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let prodReqModel = mongoose.model("product_Request",productRequestSchema);

    module.exports = prodReqModel;
