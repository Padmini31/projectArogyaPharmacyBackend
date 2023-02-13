let express = require("express");
let router = express.Router();
let loginController = require("../controller/loginController");

router.post("/signin", loginController.signIn);         //restapis
router.post("/signup", loginController.signUp);         //restapis


module.exports = router;
