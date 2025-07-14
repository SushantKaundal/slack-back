const validateManagerInput = (req, res, next) => {
  const { username, agents, owner_id, project, project_id, status,password } = req.body;

  const validStatuses = ["active", "inactive"]; // Define allowed status values

  // Validate name
  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Manager name is required and must be a string." });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "Manager password is required and must be a string." });
  }
  // Validate owner_id
  if (!owner_id || typeof owner_id !== "string") {
    return res.status(400).json({ error: "Owner ID is required and must be a string." });
  }

  // Validate agents
  if (agents && !Array.isArray(agents)) {
    return res.status(400).json({ error: "Agents must be an array." });
  }

  // Validate status (if provided)
  if (status && !validStatuses.includes(status.toLowerCase())) {
    return res.status(400).json({
      error: "Invalid status. Allowed values: 'active' or 'inactive'."
    });
  }
  next();
};


const validateMangerLogin =(req,res,next)=>{
  const {username,password} = req.body;
  if(!username || username.trim()==="" || typeof username !== "string")
  {
    return res.status(400).json({error:"username required"})
  }
  if(!password || password.trim()==="" || typeof password !== "string")
  {
    return res.status(400).json({error:"password required"})
  }
  next();
}

module.exports = {validateManagerInput,validateMangerLogin};
