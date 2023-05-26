let express = require("express");
let router = express.Router();

let delcontroller=require("../controller/delController");

//http://localhost:3000/api/deli/StoreDel
router.post("/StoreDel", delcontroller.storeDEl); 


//http://localhost:3000/api/deli/updDel
router.put("/updDel", delcontroller.updDElstat); 


//http://localhost:3000/api/deli/fynDel
router.get("/fynDel", delcontroller.finDEl); 



//http://localhost:3000/api/deli/deleteDel
router.delete("/deleteDel", delcontroller.delDEl); 

module.exports = router;