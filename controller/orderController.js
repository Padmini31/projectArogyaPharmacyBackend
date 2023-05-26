let orderModel = require("../model/orderModel");

let storeOrder = async (request, response) => {
    let order = request.body;
    // console.log("")
    try {
        let result = await orderModel.insertMany(order); //data coming from arrray thats y insertMany used..

        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}


let delOrder = async (request, response) => {
    let oid = request.params.id;
    try {
        let result = await orderModel.deleteOne({ _id: oid }); //data coming from arrray thats y insertMany used..

        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}



let findAlorder = async (re, response) => {
    try {
        let result = await orderModel.find();
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let Updateorder = async (re, response) => {
    let pro = re.body;
    try {
        let result = await orderModel.updateOne({ _id: pro._id }, { $set: { ordrNum: pro.ordrNum}});
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



module.exports = { storeOrder, delOrder, findAlorder, Updateorder};