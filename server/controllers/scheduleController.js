const {Schedule} = require('../models/models')
const ApiError= require('../error/ApiError')

class ScheduleController{
    async create(req,res){
        try {
            const { date, time, room, brigadeId } = req.body;

            const schedule = await Schedule.create({
                date, time, room, brigadeId 
            });
            
            console.log(schedule)
            return res.json(schedule);
          } catch (error) {
            console.error(`Failed to create schedule: ${error.message}`);
            return res.status(500).send('An error occurred while creating the schedule.');
          }
    }

    async gelAll(req,res){
        try {
            const { brigadeId } = req.query;
        
            if (brigadeId) {
              const schedules = awaitschedules.findAll({ where: { bridageId: brigadeId } });
              return res.json(schedules);
            }
        
            
            const schedules = await Schedule.findAll();
            return res.json(schedules);
          } catch (error) {
            console.error(`Failed to retrieve schedules: ${error.message}`);
            return res.status(500).send('An error occurred while retrieving the schedules.');
           }
    }

    async getOne(req,res){
        const {id}= req.params;
        const schedule = await Schedule.findOne(
            {where:{id: id}}
        )
        return res.json(schedule)
    }
}

module.exports= new ScheduleController