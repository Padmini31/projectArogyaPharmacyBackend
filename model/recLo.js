let mongoose = require("mongoose");
mongoose.pluralize(null);
let relogSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    cid: {       // writinh how many and what type of feilds we want to set in the record. feild names and inside that their own rules. 
        type: Number,
        required: [true, "customer id  is required"],

    }
 
})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let relModel = mongoose.model("reclogin", relogSchema);

module.exports = relModel;
