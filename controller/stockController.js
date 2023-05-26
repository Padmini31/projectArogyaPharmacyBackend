let stockModel = require("../model/stockModel");
// let stockoModel = require("../model/outwStmod");

let storeStock = async (request, response) => {
    let stock = request.body;
    try {
        let result = await stockModel.insertMany(stock);
        if (result != null) {
            console.log("result ", result);
            response.send("data stored succesfuly");
        }
    }

    catch (ex) {
        response.send(ex);
    }
}




let getStock = async (request, response) => {
    try {
        let result = await stockModel.find(); //data coming from arrray thats y insertMany used..

        console.log(result);
        // response.json(result);
        if (result != null) {
            response.json(result);
        }
    }

    catch (ex) {
        response.send(ex);
    }
}



let inStock = async (request, response) => {
    try {
        let result = await stockModel.find({ _id: 1 }, { iqty }); //data coming from arrray thats y insertMany used..

        console.log(result);
        // response.json(result);
        if (result != null) {
            response.json(result);
        }
    }

    catch (ex) {
        response.send(ex);
    }
}



let ouStock = async (request, response) => {
    try {
        let result = await stockoModel.find(); //data coming from arrray thats y insertMany used..

        console.log("result i ", result);
        // response.json(result);
        if (result != null) {
            response.json(result);
        }
    }

    catch (ex) {
        response.send(ex);
    }
}



let netStock = async (request, response) => {
    let na = request.params.product;
    try {
        let stk = await stockModel.find({ product: na });

        console.log("prod based rec", stk);
        console.log("particular produt legth ", stk.length);
        s = 0;
        for (i = 0; i < stk.length; i++) {
            s = s + stk[i].iqty;
            console.log("iqty value", stk[i].iqty);
        }
        sa = 0;
        for (i = 0; i < stk.length; i++) {
            sa = sa + stk[i].oqt;
            console.log("oqt value", stk[i].oqt);
        }

        netst = s - sa;
        console.log("Net stock", netst);
        // g=ris.json();
        // console.log("dta of ris",g);
        // console.log("dta of ros",ros);
        // console.log(ros.json);
        response.json(netst);
    }

    catch (ex) {
        response.send(ex);
    }
}




let delStock = async (request, response) => {

    console.log("delete stok function called");
    let stid = request.params.id;
    try {
        console.log("id ccoming parms",stid);
        let result = await stockModel.deleteOne({ _id: stid }); //data coming from arrray thats y insertMany used..
        if(result.deletedCount==0){
            console.log("record no deleted .record not exists");
            response.json("Stock not deleted,doesnt exists");
        }
        else{
            console.log("resultdeleted",result);
            response.json("Stock deleted");
        
        }
        }

    catch (ex) {
        response.send(ex);
    }
}



module.exports = { storeStock, getStock, inStock, ouStock, netStock ,delStock};