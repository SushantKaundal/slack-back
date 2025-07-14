const mongoose = require("mongoose")
const ROLE = require("../utils/constants")

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    role: {
        type: String,
        default: ROLE.ROLE.ADMIN
    },
    request: {
        type: Object,
        require: false,
    }
})

module.exports = mongoose.model("admin", adminSchema);