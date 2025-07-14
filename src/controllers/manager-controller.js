const ManagerRepository = require("../repositories/manager-repo");
const { ROLE } = require("../utils/constants");
const { generateAuthToken } = require("../utils/jwt");

const managerRepo = new ManagerRepository();

async function createManager(req, res) {
    const { username, agents, owner_id, project, project_id,password } = req.body

    try {
        const manager = await managerRepo.create({ username, agents, owner_id, project, project_id,password})
        if (manager) {
            res.status(201).json({ message: "Manager created", Manager: manager });
        }
    } catch (error) {
           res.status(500).json({ message: "Error creating manager", error: error.message });
    }
}

async function getAllManagers(req,res)
{
    const {ownerId} = req.params

    try {
            const managers = await managerRepo.getAll({owner_id:ownerId})
            if (managers) {
            res.status(201).json({ message: "Manager fetched successfully", managers});
        }

    } catch (error) {
        res.status(500).json({ message: "Error fetching managers", error: error.message });
    }


}

async function loginManager (req,res)
{
         const { username, password } = req.body;
    
         try {
             const manager = await managerRepo.getOne({ username})
             if (manager) {
                 if(manager.password===password)
                 {
                    manager.status = "active";
                      await manager.save();
                 const managerData = manager.toObject();
                      
                     delete managerData.password
                    const data = {
                     username:managerData.username,
                     role:ROLE.MANAGER
                    }
                    const token = generateAuthToken(data)
                    return res.status(201).json({ message: "Manager Login Successfull", user: manager, token:token }); 
                 }
             }
             else{
                return res.status(404).json({ message: "invalid username" });
             }
     
         } catch (error) {
            console.log(error);
             return res.status(404).json({ message: "Unable to login Manager", error: error });
         }
}

async function Statustoggle(req, res) {
  try {
    const managerId = req.params.id;

    const manager = await managerRepo.getOne({
      _id:managerId
    });

    if (!manager) {
      return res.status(404).json({ message: "Manager not found" });
    }
    const newStatus = manager.status === "active" ? "inactive" : "active";
    manager.status = newStatus;
    await manager.save();

    res.json({ message: `Manager status updated to ${newStatus}`, manager });
  } catch (error) {
    console.error("Error toggling manager status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
    createManager,
    getAllManagers,
    loginManager,
    Statustoggle
}