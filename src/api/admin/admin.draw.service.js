const response = require('../common/response');
const db = require('../_db/dbConn')
const drawRepository = require('./admin.draw.repository')

exports.registerBluePrint = async (req, res) => {
  const data = JSON.parse(req.body.data)
  const file = req.file
  let strParams = ''

  const building = await db.query(drawRepository.saveBuilding, [data.buildName, data.floor])
  for(const temp of data.room){
    strParams += `(${building.insertId},${temp.roomNo}, "${temp.professorName}", ${temp.size}, ${temp.users}),`
  }
  strParams = strParams.substr(0, strParams.length - 1)

  await db.query(drawRepository.saveRooms(strParams))

  response(res).SUCCESS('good', data)
}
