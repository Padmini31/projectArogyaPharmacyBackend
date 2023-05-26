let express = require("express");
let router = express.Router();

let customerController = require("../controller/customerController");

//http://localhost:3000/api/customer/storeCustomer
router.post("/StoreCustomer", customerController.storeCustomer);

//http://localhost:3000/api/customer/FindAllCustomer
router.get("/FindAllCustomer", customerController.findCustomer);

//http://localhost:3000/api/customer/findCustomerByName/Raj
router.get("/findCustomerByName/:name", customerController.findCustomerByName);



module.exports = router;