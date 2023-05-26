let mongoose = require("mongoose");
mongoose.pluralize(null);
let suplrSchema = mongoose.Schema({

    _id: Number,

    supStat: {
        type: String,
        required: true
    },
    rno: {
        type: Number,
        required: [true, "Request Number is required"]
    },


    reqitm: {
        type: String,
        required: [true, "Requested Items is required"]
    },

    sup: {
        type: String,
        required: true
    },

})


let suplrModel = mongoose.model("suplr", suplrSchema);
module.exports = suplrModel;