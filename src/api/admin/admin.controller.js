const router = require('express').Router()

const drawService = require('./admin.draw.service')
const {multerUpload} = require("../../utils/uploads/upload");

router.route('/draw')
  .get(drawService.getBluePrint)
  .post(multerUpload('blueprint').single('file'), drawService.registerBluePrint)


router.post('/room', drawService.editRoom)
router.delete('/room', drawService.deleteRoom)

router.route('/build')
  .post(drawService.addRoom)
  .put(drawService.editBuild)
  .delete(drawService.deleteBuild)

module.exports = router
