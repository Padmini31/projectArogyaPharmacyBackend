let express = require("express");
let router = express.Router();

let productRequestItemController=require("../controller/proRequestItemController");

//http://localhost:3000/api/productItemReq/StorProdItemreq
router.post("/StorProdItemreq", productRequestItemController.storeproditemReq); 


//http://localhost:3000/api/productItemReq/FinproductReqItem
router.get("/FinproductReqItem", productRequestItemController.findprodReqItem); 



//http://localhost:3000/api/productItemReq/UpdateprodItem
router.patch("/UpdateprodItem", productRequestItemController.updateprodReqItem); 

module.exports = router;