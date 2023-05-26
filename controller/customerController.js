let customerModel = require("../model/customerModel");

let storeCustomer = async (request, response) => {
    let customer = request.body;
    console.log(customer);
    try {
        let result = await customerModel.insertMany(customer); //data coming from arrray thats y insertMany used..
        console.log("rsult storing customre ", result);
        if (result != null) {
            response.json(result);
        }
    }

    catch (ex) {
        response.send(ex.writeErrors);
    }
}




let findCustomer = async (request, response) => {

    try {
        let result = await customerModel.find();

        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}



let findCustomerByName = async (request, response) => {
    let na = request.params.name;
    try {
        let result = await customerModel.find({ cname: na });

        console.log(result);
        response.json(result);
    }

    catch (ex) {
        response.send(ex);
    }
}


module.exports = { storeCustomer, findCustomer, findCustomerByName };