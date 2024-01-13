const {Employee} = require('../models/models')
const ApiError= require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class EmployeeController{
    async create(req,res){
        try {
            const { name, contact,experience, userId, brigadeId } = req.body;
            const {url}= req.files;
            let fileName = uuid.v4()+'.jpg'
            url.mv(path.resolve(__dirname, '..', 'static', fileName))

            const employee = await Employee.create({
              name,
              contact,
              experience,
              url:fileName,
              userId, 
              brigadeId
            });
            
            console.log(employee)
            return res.json(employee);
          } catch (error) {
            console.error(`Failed to create employee: ${error.message}`);
            return res.status(500).send('An error occurred while creating the employee.');
          }
    }

    async gelAll(req,res){
        try {
            const { brigadeId } = req.query;
        
            // Если brigadeId указан, получаем всех employees для указанного brigadeId
            if (brigadeId) {
              const employees = await Employee.findAll({ where: { bridageId: brigadeId } });
              return res.json(employees);
            }
        
            // Если brigadeId не указан, получаем всех employees
            const employees = await Employee.findAll();
            return res.json(employees);
          } catch (error) {
            console.error(`Failed to retrieve employees: ${error.message}`);
            return res.status(500).send('An error occurred while retrieving the employees.');
           }
    }

    async getOne(req,res){
        const {id}= req.params;
        const employee = await Employee.findOne(
            {where:{userId: id}}
        )
        return res.json(employee)
    }
}

module.exports= new EmployeeController