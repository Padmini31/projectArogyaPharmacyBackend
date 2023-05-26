let delmodel = require("../model/delModel");

let storeDEl = async (re, response) => {
    let pro = re.body;
    try {
        let result = await delmodel.insertMany(pro);

        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let finDEl = async (re, response) => {

    try {
        let result = await delmodel.find();

        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}





//update full delivery status
let updDElstat = async (re, response) => {
    let bo = re.body;
    try {
let result = await delmodel.updateOne({ _id: bo._id }, { $set: { ordrNum: bo.ordrNum, delivery_status:bo.delivery_status}});

        console.log(result);
        if (result.modifiedCount > 0) {
            response.send("order number and delivery status updted successfully.");

        }

        else if (result.matchedCount > 0) {
            response.send("old an new order number and delivery status record are same.");

        }

        else {
            response.send("orderno.& delivery sts failure.plz try agin");
        }
    }

    catch (ex) {
        response.send(ex);
    }
}



let delDEl = async (re, response) => {

    try {
        let result = await delmodel.deleteOne({});

        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}




module.exports = { storeDEl, finDEl, delDEl, updDElstat };