const Router = require('express')
const router = new Router()
const brigadeController = require('../controllers/brigadeController')


router.post('/', brigadeController.create)
router.get('/', brigadeController.gelAll)
router.get('/:id', brigadeController.getOne)

module.exports=router