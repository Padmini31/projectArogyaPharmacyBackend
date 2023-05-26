let prodReItemModel = require("../model/proRequestItemModel");

let storeproditemReq = async(re,response)=>{
    let item = re.body;
    try {
        let result = await prodReItemModel.insertMany(item); //data coming from arrray thats y insertMany used..
        console.log(result);    
        response.json(result);
        }
    
    catch (ex) {
        response.send("ERROR "+ex);
    }
}


let findprodReqItem= async(re,response)=>{
    try {
        let result = await prodReItemModel.find();
    
        console.log(result);    
        response.json(result);
        }
    
    catch (ex) {
        response.send(ex);
    }
}



let updateprodReqItem= async(re,response)=>{
    let rid = re.body;
    try {
        let result = await prodReItemModel.updateOne({_id:rid._id},{$set:{requested_Items:rid.requested_Items}});
    if(result.modifiedCount>0){
        response.send("record updated");
    }
    else if(result.matchedCount>0){
        response.send("old an new records are same,hence not ");
    }
    else{
        response.send("record notfound");
}
        console.log(result);    
        response.json(result);
        }
    
    catch (ex) {
        response.send(ex);
    }
}



module.exports = {storeproditemReq,findprodReqItem,updateprodReqItem};