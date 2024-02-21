const response = require('../common/response');
const db = require('../_db/dbConn')
const drawRepository = require('./admin.draw.repository')

exports.registerBluePrint = async (req, res) => {
  const data = JSON.parse(req.body.data)
  const {path, mimetype, filename, originalname} = req.file
  let strParams = ''

  const building = await db.query(drawRepository.saveBuilding, [data.buildName, data.floor])
  for(const temp of data.room){
    strParams += `(${building.insertId},${temp.roomNo}, "${temp.professorName}", ${temp.size}, ${temp.users}),`
  }
  strParams = strParams.substr(0, strParams.length - 1)

  await db.query(drawRepository.saveRooms(strParams))
  await db.query(drawRepository.saveBluePrint, [1, building.insertId, path, mimetype, filename, originalname])

  response(res)
    .SUCCESS('good', data)
}

exports.getBluePrint = async (req, res) => {
  const {} = req.body

  let copy = [...await db.query(drawRepository.getBluePrint)]

  for(let it of copy){
    it.room = JSON.parse(it.room)
  }

  response(res)
    .SUCCESS('GOOD', copy)
}

exports.editRoom = async (req, res) => {
  const {id, build, room_no, room_size, max_user, professor_name} = req.body

  await db.query(drawRepository.updateRoom, [build, room_no, room_size, max_user, professor_name, id])
  // const result = await db.query(drawRepository.getRoom, [id])

  response(res)
    .SUCCESS('GOOD', {
      // ...result
    })
}

exports.deleteRoom = async (req, res) => {
  const {id} = req.body

  await db.query(drawRepository.deleteRoom, [id])

  response(res)
    .SUCCESS('GOOD')
}

exports.addRoom = async (req, res) => {
  const {build, room_no, room_size, max_user, professor_name} = req.body

  // console.log(req.body)
  await db.query(drawRepository.insertRoom, [build, room_no, room_size, parseFloat(max_user), professor_name])
  // const result = await db.query(drawRepository.getRoom, [id])

  response(res)
    .SUCCESS('GOOD', {
      // ...result
    })
}

exports.editBuild = async (req, res) => {
  const {id, name, floor} = req.body

  // console.log(req.body)
  await db.query(drawRepository.updateBuild, [name, floor, id])
  // const result = await db.query(drawRepository.getRoom, [id])

  response(res)
    .SUCCESS('GOOD', {
      // ...result
    })
}

exports.deleteBuild = async (req, res) => {
  const {id} = req.body

  await db.query(drawRepository.deleteBuild, [id])

  response(res)
    .SUCCESS('GOOD', {
      // ...result
    })
}
