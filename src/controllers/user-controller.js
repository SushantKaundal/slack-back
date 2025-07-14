const ownerSchema = require("../db/owners");
const { ROLE } = require("../utils/constants");
const { generateAuthToken } = require("../utils/jwt");

async function createOwner(req, res) {
    const { username, password, role } = req.body;

    console.log("USERNAME",username);
    console.log("PAsowrd",password);
    console.log("role",role);
    try {
        const user = await ownerSchema.create({ username, password, role })

        console.log("CREATED USER", user);


        if (user) {
            return res.status(201).json({ message: "Owner created Successfull", user: user });
        }

    } catch (error) {
        return res.status(404).json({ message: "Unable to create Owner", error: error.errorResponse });
    }
}

async function loginOwner(req, res) {
    console.log("⚡ LOGIN HIT");

    const { username, password } = req.body;
    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    try {
        const owner = await ownerSchema.findOne({ username }).select("+password");
        console.log("SCHEMA", ownerSchema);
         console.log("Owner", owner);
        if (!owner) {
            return res.status(404).json({ message: "Owner not found" });
        }

        if (owner.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const ownerData = owner.toObject();
        delete ownerData.password;

        const data = {
            username: owner.username,
            role: ROLE.OWNER
        };

        const token = generateAuthToken(data);

        return res.status(200).json({
            message: "Owner Login Successful",
            user: ownerData,
            token: token
        });
    } catch (error) {
        console.error("❌ Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}







module.exports = {
    createOwner,
    loginOwner
}