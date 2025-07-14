const CrudRepository = require("./crud-repo");
const projectSchema = require("../db/project")

class ProjectRepository extends CrudRepository
{
   constructor()
   {
    super(projectSchema)
   }
}


module.exports= ProjectRepository