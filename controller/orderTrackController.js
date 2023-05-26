let ordertrackmodel = require("../model/ordertrackmodel");

let Storetrack = async (request, response) => {
    let track = request.body;
    try{
            let result = await ordertrackmodel.insertMany(track);
            response.send("order track info postd");
        }


    catch (ex) {
        response.send(ex);
    }
}




let FindTrack = async (request, response) => {
    
    try {
        let result = await ordertrackmodel.find();
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


// let storeProduct = async (request, response) => {
//     let product = request.body;
//     try {
//         let result = await productModel.insertMany(product); //data coming from arrray thats y insertMany used..
//         // if()
//         console.log(result);    
//         response.json(result);
//         }
    
//     catch (ex) {
//         response.send(ex);
//     }
// }


module.exports = { FindTrack,Storetrack };