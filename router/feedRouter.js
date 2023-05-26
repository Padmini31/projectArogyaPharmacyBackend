let express = require("express");
let router = express.Router();

let feedbackController = require("../controller/feedbackController");



//http://localhost:3000/api/feedback/Storefeedbk
router.post("/Storefeedbk",feedbackController.storefeedbak);

//http://localhost:3000/api/feedback/FindAllfeedbk
router.get("/FindAllfeedbk", feedbackController.findfeed);


module.exports = router;