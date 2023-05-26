let mongoose = require("mongoose");
mongoose.pluralize(null);
let productSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    pname: {       // writinh how many and what type of feilds we want to set in the record. feild names and inside that their own rules. 
        type: String,
        required: [true, "product name is required"],

    },

    qty: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: [true, "price must be required"],

    },

    category: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required:true

    },
categoryId: {
        type: Number,
        required: false
    },
    description:{
        type:String,
        required:true
    }

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let productModel = mongoose.model("product", productSchema);

module.exports = productModel;
