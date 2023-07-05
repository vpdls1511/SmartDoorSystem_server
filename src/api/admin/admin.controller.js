const router = require('express').Router()

const drawService = require('./admin.draw.service')
const {multerUpload} = require("../../utils/uploads/upload");

router.route('/draw')
  .post(multerUpload('blueprint').single('file'), drawService.registerBluePrint)

module.exports = router
