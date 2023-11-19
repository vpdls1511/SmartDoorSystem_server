exports.saveBuilding = `INSERT INTO building(name, floor) VALUE (?,?)`
exports.saveRooms = (params) => `INSERT INTO room(building, room_no, professor_name, room_size, max_user) VALUES ${params}`
exports.saveBluePrint = `INSERT INTO file(file_type, parent_id, path, mime_type, filename, originalname) VALUES(?,?,?,?,?,?)`

exports.getBluePrint = `
    select b.*,
           JSON_ARRAYAGG(
                   JSON_OBJECT(
                           'id', r.id,
                           'build', r.building,
                           'room_no', r.room_no,
                           'professor_name', r.professor_name,
                           'room_size', r.room_size,
                           'max_user', r.max_user
                       )
               ) as room
    from room r
             join building b on b.id = r.building
    group by b.name;
`

exports.updateRoom = `
  UPDATE room
  SET building = ? , 
      room_no = ? , 
      room_size = ? , 
      max_user = ? , 
      professor_name = ? 
  WHERE id = ?
`
exports.getRoom = `SELECT * FROM room WHERE id = ?`

exports.deleteRoom = `DELETE FROM room WHERE id = ?`

exports.insertRoom = `
  INSERT INTO room(building, room_no, room_size, max_user, professor_name) value (?,?,?,?,?)
`

exports.deleteBuild = `DELETE FROM building WHERE id = ?`
