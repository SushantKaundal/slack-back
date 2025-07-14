const CrudRepository = require("./crud-repo");
const ManagerSchema = require("../db/manager")

class ManagerRepository extends CrudRepository
{
   constructor()
   {
    super(ManagerSchema)
   }
}


module.exports= ManagerRepository