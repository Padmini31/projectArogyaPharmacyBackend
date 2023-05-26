let productModel = require("../model/productModel");

let storeProduct = async (request, response) => {
    let product = request.body;
    try {
        let result = await productModel.insertMany(product); //data coming from arrray thats y insertMany used..

        console.log(result);
        // response.json(result);
        if(result!=null){
            response.json("Record stored Successfully");
        }
    }

    catch (ex) {
        response.json(ex);
    }
}


let delProduct = async (request, response) => {
    let pid = request.params.id;
    try {
        let result = await productModel.deleteOne({ _id: pid }); //data coming from arrray thats y insertMany used..

        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}



let findAlprod = async (re, response) => {
    try {
        let result = await productModel.find();
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let findProNam = async (re, response) => {
    let pnam = re.params.nam;
    try {
        let result = await productModel.find({pname:pnam});
        console.log(result);
        if(result!=null){
        response.send(result);
    }}
    catch (ex) {
        response.send(ex);
    }
}




let findProId= async (re, response) => {
    let pid = re.params.id;
    try {
        
        let result = await productModel.find({_id:pid});
        console.log(result);
       
        if(result!=null){
        response.send(result);
        console.log(pid);
    }}
    catch (ex) {
        response.send(ex);
    }
}




let findPrByCtNam= async (re, response) => {
    let pctnam = re.params.ctnm;
    try {
        
        let result = await productModel.find({category:pctnam});
        console.log(result);
       
        if(result!=null){
        response.send(result);
        console.log(pctnam);
    }}
    catch (ex) {
        response.send(ex);
    }
}



let UpdateprodCat = async (re, response) => {
    let pro = re.body;
    try {
        let result = await productModel.updateOne({ _id: pro._id }, { $set: {category: pro.category } });
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}




let UpdateprodImg = async (re, response) => {
    let pro = re.body;
    try {
        let result = await productModel.updateOne({ _id: pro._id }, { $set: {image: pro.image } });
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let UpdateAllprod = async (re, response) => {
    let pro = re.body;
    try {
        let result = await productModel.updateMany({}, { $set: { qty: pro.qty } });
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let findlowstock = async (re, response) => {   //now we aren't sending/passing any paarameter in thru this function .which can return any value.in first parameter.only response is to bsend.
    try {
        let result = await productModel.find({qty:{$lt:10}});
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}




module.exports = { storeProduct, delProduct, findAlprod, UpdateprodCat,UpdateAllprod,findlowstock,findProNam,UpdateprodImg,findPrByCtNam,findProId};