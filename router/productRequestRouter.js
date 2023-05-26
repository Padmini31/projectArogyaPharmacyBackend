let express = require("express");
let router = express.Router();

let prodReqController=require("../controller/prodReqController");

//http://localhost:3000/api/productRequest/StoreproductRequest
router.post("/StoreproductRequest", prodReqController.StoreproductRequest); 


//http://localhost:3000/api/productRequest/finprodReq
router.get("/finprodReq", prodReqController.getproductReq); 




module.exports = router;