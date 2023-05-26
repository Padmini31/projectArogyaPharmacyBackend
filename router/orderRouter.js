let express = require("express");
let router = express.Router();

let orderController=require("../controller/orderController");

//http://localhost:3000/api/order/Storeorder
router.post("/Storeorder", orderController.storeOrder); 


//http://localhost:3000/api/order/DeleteOrder/2
router.delete("/DeleteOrder/:id", orderController.delOrder); 


//http://localhost:3000/api/order/findAlorder
router.get("/findAlorder", orderController.findAlorder); 


//http://localhost:3000/api/order/updateOrder
router.patch("/updateOrder", orderController.Updateorder); 




module.exports = router;