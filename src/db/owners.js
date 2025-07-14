const ROLE = require("../utils/constants")

const mongoose = require("mongoose")
const ownerSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        select:false
    },
    owner_id:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:Object.values(ROLE),
    },
    managers:{
        type: [mongoose.Schema.Types.ObjectId], 
        ref: "managers",                            
        default: []
    }
})

module.exports = mongoose.model("owners",ownerSchema)