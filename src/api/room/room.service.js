const db = require('../_db/dbConn')
const response = require('../common/response');
const roomRepository = require('./room.repository')

exports.getAllRoom = async (req, res) => {
  try{
    let result = await db.query(roomRepository.getAllRoomQuery)

    for(let it of result){
      it.room = JSON.parse(it.room)
    }

    response(res)
      .SUCCESS('정상적으로 조회되었습니다.', result)
  }catch (e) {
    response(res)
      .BAD_REQUEST(e.message)
  }
}
