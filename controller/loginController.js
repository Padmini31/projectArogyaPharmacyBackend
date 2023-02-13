let loginModel = require("../model/loginModel");

let signUp = async (request, response) => {
    let login = request.body;
    console.log(login);
    //response.send("done");
    try {
        if (login.typeofuser == "admin") {
            response.send("admin account can't create");
        } else {
            let result = await loginModel.insertMany(login);
            response.send("Customer Account Created");
        }

        // if (result != null) {
    }
    // }


    catch (ex) {
        response.send(ex);
    }
}




let signIn = async (request, response) => {
    let login = request.body;
    try {
        let result = await loginModel.find({ emailid: login.emailid, password: login.password, typeofuser: login.typeofuser });
        // if (result != null) {
        if (result.length == 0) {  //if ther is any data matched n foun den it will come in result esle result is null.Array value iscoming..result is in theformof Array.if ther is no result in resultvariable.if ther is any data matched n foun den it will come in result esle result is null.
            response.send("Emailid is wrongor password is wrong or type of user may be wrong");
        }

        else if (result[0].typeofuser == "admin") {
            response.json({ "msg": "Admin login successfully" });
        }

        else {
            response.json({ "msg": "customer login successfully" });
        }

    }
    catch (ex) {
        response.send(ex);
    }
}


module.exports = { signIn, signUp };