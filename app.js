let express = require("express");
let expr = express();
let loginRouter = require("./router/loginRouter"); //loadthe module or package as file here

let dbConfig = require("./config/dbConfig");

dbConfig.dbConnection; //calling this variable to get the connection

expr.use(express.json()); // to enable data received from post method .we use this line/statemnt.



expr.use("/api/login", loginRouter);

expr.listen(3000, () => console.log("server running on port number 3000"));