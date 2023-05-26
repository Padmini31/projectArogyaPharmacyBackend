let express = require("express");
let router = express.Router();

let stokController = require("../controller/stockController");

//http://localhost:3000/api/stock/storeStock
router.post("/storeStock", stokController.storeStock);

//http://localhost:3000/api/stock/storeoStock
// router.post("/storeoStock", stokController.storeoStock);



//http://localhost:3000/api/stock/getStock
router.get("/getStock", stokController.getStock);


// //http://localhost:3000/api/stock/getinStock
// router.get("/getinStock",stokController.inStock)


//http://localhost:3000/api/stock/getouStock
router.get("/getouStock",stokController.ouStock);

// http://localhost:3000/api/stock/netStock/crocin
router.get("/netStock/:product",stokController.netStock);


// http://localhost:3000/api/stock/deleteStock/1
router.get("/deleteStock/:id",stokController.delStock);

module.exports = router;