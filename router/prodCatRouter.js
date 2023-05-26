let express = require("express");
let router = express.Router();

let productCatController = require("../controller/productCatControllr");


//http://localhost:3000/api/productCat/StoreCategoProd
router.post("/StoreCategoProd", productCatController.StoreprodCat);


// http://localhost:3000/api/productCat/UpdateCategoProd
router.patch("/UpdateCategoProd", productCatController.updateprodCat);


// http://localhost:3000/api/productCat/UpdateProdImag
router.patch("/UpdateProdImag", productCatController.updateProdImg);

//http://localhost:3000/api/productCat/DelCategoProd/4
router.delete("/DelCategoProd/:id", productCatController.delprodCat);



//http://localhost:3000/api/productCat/findAllCategoProd
router.get("/findAllCategoProd", productCatController.findAlprodCat);

module.exports = router;