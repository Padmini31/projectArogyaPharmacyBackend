let mongoose = require("mongoose");
mongoose.pluralize(null);
let ordtrackSchema = mongoose.Schema({  // writing certai Rules for the Schema.called Schema Rules.all the rules defined in it.
    _id: Number,

    date: {       
        type:String,
        required: [true, "date is required"],
        
    },
    
    time: {       
        type:String,
        required: [true, "time is required"],
        
    },
    
    place: {       
        type:String,
        required: [true, "place  is required"],
        
    },
    
    shipped_status: {       
        type:String,
        required: [true, "status  is required"],
        
    }
    
    

})

//first parameter PROVIDING COLLECTION NAME
//second parameter hold Schema Details.
let trackModel = mongoose.model("order_track", ordtrackSchema);

    module.exports = trackModel;
