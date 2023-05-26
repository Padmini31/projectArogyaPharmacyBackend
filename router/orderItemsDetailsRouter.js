let express = require("express");
let router = express.Router();

let orderItemsDetailController=require("../controller/orderItemsController");

//http://localhost:3000/api/orderItems/Storeorderitemsdetail
router.post("/Storeorderitemsdetail", orderItemsDetailController.orderItemsDetails); 


//http://localhost:3000/api/orderItems/getorderitemsdetail
router.get("/getorderitemsdetail", orderItemsDetailController.getorderItemsDetails); 



//http://localhost:3000/api/orderItems/updateOrderItems
router.patch("/updateOrderItems", orderItemsDetailController.UpdateOrderItems); 

//http://localhost:3000/api/orderItems/generateBill/3
router.get("/generateBill/:id", orderItemsDetailController.genrtbill); 



module.exports = router;