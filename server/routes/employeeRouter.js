const Router = require('express')
const router = new Router()
const employeeController = require('../controllers/employeeController')


router.post('/', employeeController.create)
router.get('/', employeeController.gelAll)
router.get('/:id', employeeController.getOne)

module.exports=router