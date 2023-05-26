let mongoose = require("mongoose");
mongoose.pluralize(null);
let supplySchema = mongoose.Schema({

    _id: Number,

    reqNo: {
        type: Number,
        required: [true, "Request Number is required"]
    },


    requested_items: {
        type: String,
        required: [true, "Requested Items is required"]
    }

})


let supplyModel = mongoose.model("supply_office", supplySchema);
module.exports = supplyModel;