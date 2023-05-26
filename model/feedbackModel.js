let mongoose = require("mongoose");
mongoose.pluralize(null);
let feedSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.all the rules defined in it.
    _id: Number,

    feedback: {       
        type:String,
        required: [true, "feedback is required"],
        
    }
    
    

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let feedModel = mongoose.model("feedback", feedSchema);

    module.exports = feedModel;
