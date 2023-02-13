let mongoose = require("mongoose")
mongoose.set("strictQuery",true);
let url = "mongodb://127.0.0.1:27017/mydb" //it contains url details with database name.

let dbConnection = mongoose.connect(url).then(res=>console.log("db connected")).catch(ex=>console.log("error generated "+ex));

module.exports = dbConnection;