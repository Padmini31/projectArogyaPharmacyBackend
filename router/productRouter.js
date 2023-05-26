let express = require("express");
let router = express.Router();

let productController=require("../controller/productController");

//http://localhost:3000/api/product/StoreProduct
router.post("/StoreProduct", productController.storeProduct); 


//http://localhost:3000/api/product/DeleteProduct/2
router.delete("/DeleteProduct/:id", productController.delProduct); 


//http://localhost:3000/api/product/findAlProd
router.get("/findAlProd", productController.findAlprod); 


//http://localhost:3000/api/product/findProdByNam/vicks
router.get("/findProdByNam/:nam", productController.findProNam); 


//http://localhost:3000/api/product/findProdByCatName
router.get("/findProdByCatName/:ctnm", productController.findPrByCtNam); 


//http://localhost:3000/api/product/findProdById/1
router.get("/findProdById/:id", productController.findProId); 

//http://localhost:3000/api/product/updateProd
router.patch("/updateProd", productController.UpdateprodCat); 

//http://localhost:3000/api/product/updateProdIm
router.patch("/updateProdIm", productController.UpdateprodImg); 


//http://localhost:3000/api/product/updateAllProd
router.patch("/updateAllProd", productController.UpdateAllprod); 


//myown not mentionin doc


//http://localhost:3000/api/product/findlowstckpro
router.get("/findlowstckpro", productController.findlowstock);



module.exports = router;