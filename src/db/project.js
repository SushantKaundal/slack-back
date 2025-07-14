// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
    trim: true
  },
  project_id: {
    type: Number,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  allocated_to: [
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manager"
    },
    name: String
  }
],
  deadline: {
    type: Date,
    required: true
  },
  owner_id:{
    type:String,
    require:true,
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Project', projectSchema);
