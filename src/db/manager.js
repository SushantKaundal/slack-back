const mongoose = require("mongoose");
const { STATUS, ROLE } = require("../utils/constants"); // Assuming STATUS is imported from another file

const ManagerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  agents: {
    type: [String],
    default: [],
  },
  owner_id: {
    type: String,
    required: true,
  },
  project:[
    {
       project_name:{
        type:String,
       },
       project_id:{
        type:String
       }
    }
  ],
  status: {
    type: String,
    enum: [STATUS.ACTIVE, STATUS.INACTIVE],
    default: STATUS.INACTIVE,
  },
  role:{
    type:String,
    default:ROLE.MANAGER
  }
});

module.exports = mongoose.model("Manager", ManagerSchema);
