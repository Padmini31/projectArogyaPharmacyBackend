let express = require("express");
let router = express.Router();
let ordertrack = require("../controller/orderTrackController");


//http://localhost:3000/api/orderTrack/storetrack
router.post("/storetrack", ordertrack.Storetrack );    


//http://localhost:3000/api/orderTrack/findtrack
router.get("/findtrack", ordertrack.FindTrack);   


module.exports = router;
