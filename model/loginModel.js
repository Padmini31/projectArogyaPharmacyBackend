let mongoose = require("mongoose");
mongoose.pluralize(null);
let loginSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.studetSchema hasall the rules defined in it.
    _id: Number,

    emailid: {       // writinh how many and what type of feilds we want to set in the record. feild names and inside that their own rules. 
        type: String,
        required: [true, "Email id is required"],
        unique:[true,"Email  id must be unique"]
    },

    password: {
        type: String,
        required: true
    },

typeofuser: {
        type: String,
        required: [true, "type of user must be required"],

    },
    cus:{
        type:Number,
        required:false
    }

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let loginModel = mongoose.model("Login", loginSchema);

    module.exports = loginModel;
