const router = require('express').Router()
const roomService = require('./room.service')

router.route('/')
  .get(roomService.getAllRoom)

router.route('/detail')
  .get(roomService.getRoomDetail)

module.exports = router
