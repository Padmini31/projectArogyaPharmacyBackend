let orderItemsModel = require("../model/orderitemDetailModel");

let orderItemsDetails = async (re, response) => {
    try {
        let orde = re.body;
        console.log("order itm is", orde);
        s = await orderItemsModel.find();
        l = s.length;
        console.log("length of ", l)
        orde.ordNum = l + 1;
        let result = await orderItemsModel.insertMany(orde);
        // console.log("ordr itm storation", result);
        response.json(result);
    }
    catch (ex) {
        // console.log("error", ex);
        response.send(ex);

    }
}



let getorderItemsDetails = async (re, response) => {
    try {

        let result = await orderItemsModel.find();
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


let genrtbill = async (re, response) => {
    let vu = re.params.id;
    try {

        let result = await orderItemsModel.find({ ordNum: vu });
        let bill = result[0].price * result[0].Orqty;
        // console.log("bils", bill);
        response.json(bill);

    }

    catch (ex) {
        response.send(ex);
    }
}





let UpdateOrderItems = async (re, response) => {
    let pc = re.body;
    try {

        let result = await orderItemsModel.updateOne({ _id: pc._id }, { $set: { ordNum: pc.ordNum } });
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


module.exports = { orderItemsDetails, getorderItemsDetails, genrtbill, UpdateOrderItems };