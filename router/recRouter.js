let express = require("express");
let router = express.Router();
let reclgController = require("../controller/reclgController");



//http://localhost:3000/api/rec/storlog
router.post("/storlog",reclgController.login );   

//http://localhost:3000/api/rec/show
router.get("/show",reclgController.showlog);   
        //restapis
module.exports = router;
