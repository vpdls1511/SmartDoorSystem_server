const router = require('express').Router()

const adminController = require('./admin/admin.controller')
const roomController = require('./room/room.controller')

router.use('/admin', adminController)
router.use('/room', roomController)

module.exports = router
