const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const brigadeRouter = require('./brigadeRouter')
const employeeRouter = require('./employeeRouter')
const scheduleRouter = require('./scheduleRouter')


router.use('/user', userRouter)
router.use('/brigade', brigadeRouter)
router.use('/employee', employeeRouter)
router.use('/schedule', scheduleRouter)


module.exports=router