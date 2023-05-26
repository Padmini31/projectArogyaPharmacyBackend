let mongoose = require("mongoose");
let proCatSchema = mongoose.Schema({
    _id: Number,

    categoryName: {
        type: String,
        required: [true, "Product category is required"],


    },
    image:{
        type:String,
        required:[true,"image is required"],
    }
})

let catmodel = mongoose.model("product_category", proCatSchema);

module.exports = catmodel;   //package of model