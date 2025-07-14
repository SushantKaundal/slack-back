class CrudRepository
{
  constructor(model)
  {
    this.model= model
  }
  async getAll(filter = {}) {

    const response = await this.model.find(filter)
    return response;
  }

  async getOne(filter = {}) {
  try {

    console.log("FILTER HERE", filter);
    const response = await this.model.findOne(filter);
    return response;
  } catch (error) {
    console.error("Error fetching one record:", error);
    throw error;
  }
}


  async create (data)
  {
    try {
        const response = await this.model.create(data);
        return response;
    } catch (error) {
        console.error("Error creating Admin:", error);
        throw error;
    }
  }
}

module.exports= CrudRepository