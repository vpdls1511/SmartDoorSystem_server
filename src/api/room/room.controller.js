const router = require('express').Router()
const roomService = require('./room.service')

router.route('/')
  .get(roomService.getAllRoom)

module.exports = router
