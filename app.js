let express = require("express");
let cors = require("cors");
let expr = express();
let dbConfig = require("./config/dbConfig");

let loginRouter = require("./router/loginRouter"); //loadthe module or package as file here
let CustomerRouter = require("./router/customerRouter");
let productRouter = require("./router/productRouter");
let productCatRouter = require("./router/prodCatRouter");
let orderitemRouter = require("./router/orderItemsDetailsRouter");
let orderRouter = require("./router/orderRouter");
let productRequest = require("./router/productRequestRouter");


let recRouter = require("./router/recRouter");


let stokRouter = require("./router/stockRouter");

// let productItemRequest = require("./router/proRequestItemRouter");
let supplyRouter = require("./router/supRouter");

let delrouter = require("./router/delRouter");

let feedrouter = require("./router/feedRouter");


// let trackRouter = require("./router/orderTrackRouter");


dbConfig.dbConnection; //calling this variable to get the connection

expr.use(express.json()); // to enable data received from post method .we use this line/statemnt.
expr.use(cors());

expr.use("/api/login", loginRouter);
//"export" the router from otherfile so that u can use this function of express(linking)from this file .router works like hyperlink or <a> tag.

expr.use("/api/customer", CustomerRouter);

expr.use("/api/product", productRouter);

expr.use("/api/order", orderRouter);

expr.use("/api/productCat", productCatRouter);

expr.use("/api/orderItems", orderitemRouter);

expr.use("/api/productRequest", productRequest);

// expr.use("/api/productItemReq", productItemRequest);

expr.use("/api/supply", supplyRouter);
expr.use("/api/deli", delrouter);

expr.use("/api/feedback", feedrouter);

// expr.use("/api/orderTrack", trackRouter);
expr.use("/api/stock", stokRouter);

expr.use("/api/rec", recRouter);

expr.listen(3000, () => console.log("server running on port number 3000"));