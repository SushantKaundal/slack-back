const CrudRepository = require("./crud-repo");
const adminSchema = require("../db/admin")

class AdminRepositoy extends CrudRepository
{
   constructor()
   {
    super(adminSchema)
   }
}


module.exports= AdminRepositoy