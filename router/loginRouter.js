let express = require("express");
let router = express.Router();
let loginController = require("../controller/loginController");



//http://localhost:3000/api/login/signin
router.post("/signin", loginController.signIn);   
      //rest


//http://localhost:3000/api/login/shw
router.get("/shw", loginController.shw);   
      
      
//http://localhost:3000/api/login/signup
router.post("/signup", loginController.signUp);   


module.exports = router;
