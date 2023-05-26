let loginModel = require("../model/loginModel");
let recModel = require("../model/recLo");

let signUp = async (request, response) => {
    let login = request.body;
    console.log(login);
    //response.send("done");
    try {
        if (login.typeofuser == "admin") {
            response.send("admin account can't create");
        } else {

            s = await loginModel.find();
            l = s.length;
            console.log("length of ", l)
            login.cus = l + 1;
            let result = await loginModel.insertMany(login);
            response.send("Customer Account Created");


        }


    }
    catch (ex) {
        response.send("Email id must b unique");
        response.json({ "msg": "Email id must b unique" });
    }
}

let signIn = async (request, response) => {
    let login = request.body;
    try {
        console.log("log", login);
        let result = await loginModel.find({ emailid: login.emailid, password: login.password, typeofuser: login.typeofuser });
        // if (result != null) {
        if (result.length == 0) {  //if ther is any data matched n foun den it will come in result esle result is null.Array value iscoming..result is in theformof Array.if ther is no result in resultvariable.if ther is any data matched n foun den it will come in result esle result is null.
            response.json({ "msg": "Emailid or password is wrong or type of user may be wrong" });

        }

        else if (result[0].typeofuser == "admin") {
            response.json({ "msg": "Admin login successfully" });
        }


        else if (result[0].typeofuser == "supplier") {
            response.json({ "msg": "Supplier login successfully" });
        }
        else {
         
            ob =result[0].cus;
            console.log(ob);
            let res = await recModel.insertMany({cid:ob});
            console.log("resultof storing reclog", res);
            response.json({ "msg": "Customer login successfully" });

        }

    }
    catch (ex) {
        console.log("er", ex);
        // response.send(ex);
    }
}


let storeProduct = async (request, response) => {
    let product = request.body;
    try {
        let result = await productModel.insertMany(product); //data coming from arrray thats y insertMany used..
        // if()
        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}



let shw = async (request, response) => {

    try {
        let result = await loginModel.find(); //data coming from arrray thats y insertMany used..
        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}

module.exports = { signIn, signUp, shw };