let recModel = require("../model/recLo");

let login = async (re, response) => {
    try {
        let log = re.body;
        console.log("val of insertinng in logrec", log);
        let result = await recModel.insertMany(log);
        console.log("inserted in db", result);
        // response.json(result);
    }
    catch (ex) {
        // console.log("error", ex);
        response.send(ex);

    }
}



let showlog = async (re, response) => {
    try {

        let result = await recModel.find();
        console.log("result login",result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


// let genrtbill = async (re, response) => {
//     let vu = re.params.id;
//     try {
//         let i = 0;
//         while (i >= 0) {
//             let result = await orderItemsModel.find({ ordNum: vu });
//             // response.send(result)
//             //     console.log(result);

//             let bill = result[i].price * result[i].Orqty;
//             //     console.log(p);
//             //    let bil = p.price*p.Orqty;

//             response.send("bill for ordr number " + vu + " is " + bill);
//             //     console.log(p);
//             i++;
//             // }}
//         }
//     }
//     catch (ex) {
//         response.send(ex);
//     }

// }




// let UpdateOrderItems = async (re, response) => {
//     let pc = re.body;
//     try {

//         let result = await orderItemsModel.updateOne({ _id: pc._id }, { $set: { ordNum: pc.ordNum } });
//         console.log(result);
//         response.json(result);
//     }
//     catch (ex) {
//         response.send(ex);
//     }
// }


module.exports = { login, showlog };