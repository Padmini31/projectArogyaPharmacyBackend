let prodReqModel = require("../model/prodReqModel");

let StoreproductRequest = async (re, response) => {
    try {
        let pr = re.body;
        let result = await prodReqModel.insertMany(pr); //INTHAT MODEL I CAN STORE,AND DO ALLFUNCTIONS 
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let getproductReq = async (re, response) => {
    try {

        let result = await prodReqModel.find();
        console.log("find prod req", result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}





module.exports = { getproductReq,StoreproductRequest};