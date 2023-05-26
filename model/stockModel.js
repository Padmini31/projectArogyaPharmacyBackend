let mongoose = require("mongoose");
mongoose.pluralize(null);
let stockSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    date: {
        type: Date,
        required: [true, "date is required"]
    },

    product: {
        type: String,
        required: [true, "Product must be required"]

    },

    iqty: {
        type: Number,
        required: true

    },
    oqt: {
        type: Number,
        required: true

    }

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let stockModel = mongoose.model("stock", stockSchema);

module.exports = stockModel;
