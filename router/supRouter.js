let express = require("express");
let router = express.Router();

let supController = require("../controller/supController");

//http://localhost:3000/api/supply/getSup
router.get("/getSup", supController.finsup);

//http://localhost:3000/api/supply/storeSup
router.post("/storeSup", supController.storeSup);



//http://localhost:3000/api/supply/storeReply
router.post("/storeReply", supController.storRep);


//http://localhost:3000/api/supply/getRpl
router.get("/getRpl",supController.getRep);


// http://localhost:3000/api/supply/updSup
// router.patch("/updSup/:s",supController.upSup);

module.exports = router;