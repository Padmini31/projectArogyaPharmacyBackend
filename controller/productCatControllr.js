let proCatModel = require("../model/proCatModel");

let StoreprodCat = async (re, response) => {
    let cat = re.body;
    try {
        let result = await proCatModel.insertMany(cat);
        if(result!=0){
        response.json("Product Catgory stored");
    }}
    catch (ex) {
        response.send(ex);
    }
}


let delprodCat = async (re, response) => {
    let catid = re.params.id;
    try {
        let result = await proCatModel.deleteOne({ _id: catid });
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}




let findAlprodCat = async (re, response) => {
    try {
        let result = await proCatModel.find();
        console.log(result);
        response.send(result);
    }
    catch (ex) {
        response.send(ex);
    }
}



let updateprodCat = async (re, response) => {
    let prod = re.body;
    try {
        let result = await proCatModel.updateOne({ _id: prod._id }, { $set: { categoryName: prod.categoryName } });
        if (result.modifiedCount == 1) {
            // console.log(result);
            response.send("record updated");
        }
        else {
            response.send("Record doesnt exists or old recor iis same as neu ");
        }
    }
    catch (ex) {
        response.send("error generated " + ex);
    }
}



let updateProdImg = async (re, response) => {
    let prod = re.body;
    try {
        let result = await proCatModel.updateOne({ _id: prod._id }, { $set: { image: prod.image } });
        console.log(result);
        response.json(result);
    }
    catch (ex) {
        response.send("error generated " + ex);
    }
}






module.exports = { StoreprodCat, delprodCat, findAlprodCat, updateprodCat, updateProdImg };