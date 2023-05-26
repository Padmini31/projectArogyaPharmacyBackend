let supplyModel = require("../model/supplyModel");
let suplrModel = require("../model/suplrModel");

let finsup = async (request, response) => {
    try {
        let result = await supplyModel.find(); //data coming from arrray thats y insertMany used..
        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}

let storeSup = async (request, response) => {
    d = request.body;
    console.log("post req", d);
    try {
        let result = await supplyModel.insertMany(d); //data coming from arrray thats y insertMany used..
        console.log(result);
        if (result != 0) {
            response.send("supply request stored ");
        }
    }
    catch (ex) {
        response.send(ex);
    }

}


let storRep = async (request, response) => {
    d = request.body;
    console.log("post reply ", d);
    try {
        let result = await suplrModel.insertMany(d); //data coming from arrray thats y insertMany used..
        console.log(result);
        if (result != 0) {
            response.send("supply request reply stored ");
        }
    }
    catch (ex) {
        response.send(ex);
    }

}


let getRep = async (request, response) => {
    try {
        let result = await suplrModel.find(); //data coming from arrray thats y insertMany used..
        console.log("result of suplyr coll", result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}


// let upSup = async (re, response) => {
//     let prod = re.body;
//     try {
//         let result = await suplrModel.updateOne({ _id: prod._id }, { $set: {supS: prod.image } });
//         console.log(result);
//         response.json(result);
//     
//     catch (ex) {
//         response.send("error generated " + ex);
//     }
// }



module.exports = { finsup, storeSup, storRep, getRep};