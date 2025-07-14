const ProjectRepository = require("../repositories/project-repo");

const projectRepo = new ProjectRepository();

async function createProject(req, res) {

    try {
        const { project_name, project_id, status, description, allocated_to, deadline,owner_id } = req.body;

        const project = await projectRepo.create({ project_name, project_id, status, description, allocated_to, deadline ,owner_id})

        if (project) {
           
            return res.status(200).json({message:"project created successfully", data:project})
        }
    } catch (error) {
           return res.status(404).json({message:"erorr creating project", error:error})
    }
}

async function getAllProjects(req,res) {
    const owner_id = req.params.ownerId
    try { 
    const projects = await projectRepo.getAll({owner_id:owner_id})
    if (projects) {
            return res.status(200).json({message:"project fetched successfully", data:projects})
        }
    }
    catch (error) {
         return res.status(404).json({message:"erorr creating project", error:error})
    }
}
async function getOneProject(req,res) {


    const _id = req.params.id
    const owner_id = req.params.ownerId
    try { 
    const projects = await projectRepo.getOne({_id:_id, owner_id:owner_id})
    if (projects) {
            return res.status(200).json({message:"project fetched successfully", data:projects})
        }
    }
    catch (error) {
         return res.status(404).json({message:"erorr creating project", error:error})
    }
}


module.exports = {
    createProject,
    getAllProjects,
    getOneProject
}