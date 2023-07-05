const router = require('express').Router()

const adminController = require('./admin/admin.controller')

router.use('/admin', adminController)

module.exports = router
