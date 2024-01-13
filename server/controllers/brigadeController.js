const {Brigade} = require('../models/models')
const ApiError= require('../error/ApiError')

class BrigadeController{
    async create(req,res){
        try {
            const { name} = req.body;

            const brigade = await Brigade.create({name});
            
            console.log(brigade)
            return res.json(brigade);
          } catch (error) {
            console.error(`Failed to create brigade: ${error.message}`);
            return res.status(500).send('An error occurred while creating the brigade.');
          }
    }

    async gelAll(req,res){
        try {
            
            const brigades = await Brigade.findAll();
            return res.json(brigades);
          } catch (error) {
            console.error(`Failed to retrieve brigades: ${error.message}`);
            return res.status(500).send('An error occurred while retrieving the brigades.');
           }
    }

    async getOne(req,res){
        const {id}= req.params;
        const brigade = await Brigade.findOne(
            {where:{id: id}}
        )
        return res.json(brigade)
    }
}

module.exports= new BrigadeController