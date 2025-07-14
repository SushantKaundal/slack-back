const AdminRepositoy = require("../repositories/admin-repo");
const adminSchema= require("../db/admin");
const { generateAuthToken } = require("../utils/jwt");

const adminRepo = new AdminRepositoy();

async function AdminLogin(req,res) {
    const {username, password, role,request} = req.body;

    const admin = await adminSchema.findOne({ username }).select("+password");

    if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
    }
    else
    {

        if(admin.password===password)
        {
          const adminData = admin.toObject();
          delete adminData.password
          const token = generateAuthToken({id:admin._id,  role: admin.role})
          res.status(201).json({ message: "Login Successfull", admin: adminData, token:token });        
        }
        else{
          res.status(500).json({ message: "Incorrect Password" });
        }
    }
}
async function AdminSignup(req,res) {
    const {username, password, role} = req.body;

    try {
        const data ={
        username:username,
        password:password,
        role:role
        }

       const admin = await adminRepo.create(data);
       if(admin)
       {
        res.status(201).json({ message: "Admin created", admin: admin });
       }
       else{
        res.status(500).json({ message: "Error creating admin" });
       }
    } catch (error) {
        res.status(500).json({ message: "Error creating admin", error: err.message });
    }
    
}



module.exports={
    AdminLogin,
    AdminSignup
}