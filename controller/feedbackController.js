let feedbackModel = require("../model/feedbackModel");

let storefeedbak = async (request, response) => {
    let feedback = request.body;
    try {
        let result = await feedbackModel.insertMany(feedback); //data coming from arrra thats y insertMany used../
    
        console.log(result);    
        response.json(result);
        }
    
    catch (ex) {
        response.send(ex);
    }
}




let findfeed = async (request, response) => {
    
    try {
        let result = await feedbackModel.find(); 
    
        console.log(result);    
        response.json(result);
        }
    
    catch (ex) {
        response.send(ex);
    }
}


module.exports = {storefeedbak,findfeed};