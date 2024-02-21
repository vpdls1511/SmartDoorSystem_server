exports.saveBuilding = `INSERT INTO building(name, floor) VALUE (?,?)`
exports.saveRooms = (params) => `INSERT INTO room(building, room_no, professor_name, room_size, max_user)
                                 VALUES ${params}`
exports.saveBluePrint = `INSERT INTO file(file_type, parent_id, path, mime_type, filename, originalname)
                         VALUES (?, ?, ?, ?, ?, ?)`

exports.getBluePrint = `
    select b.*,
           JSON_ARRAYAGG(
                   JSON_OBJECT(
                           'id', r.id,
                           'build', r.building,
                           'room_order', r.room_order,
                           'room_no', r.room_no,
                           'professor_name', r.professor_name,
                           'room_size', r.room_size,
                           'max_user', r.max_user
                       )
               ) as room
    from room r
             join building b on b.id = r.building
    group by b.name
    ORDER BY b.building_order ASC, r.room_order ASC
`

exports.updateRoom = `  UPDATE room
                        SET building       = ?,
                            room_no        = ?,
                            room_size      = ?,
                            max_user       = ?,
                            professor_name = ?
                        WHERE id = ?`

exports.getRoom = `SELECT *
                   FROM room
                   WHERE id = ?`

exports.deleteRoom = `DELETE
                      FROM room
                      WHERE id = ?`

exports.insertRoom = `INSERT INTO room(building, room_no, room_size, max_user, professor_name) value (?,?,?,?,?)`

// 순서결정
exports.getBuildOrder = `
  SELECT * FROM building WHERE building_order = ?
`
exports.updeteExistingOrder = `
  UPDATE building SET building_order = building_order + 1 WHERE building_order >= ?  
`
exports.updateOrder = `UPDATE building SET building_order = ? WHERE id =?`

exports.updateBuild = `UPDATE building
                       SET name  = ?,
                           floor = ?
                       WHERE id = ?`

exports.deleteBuild = `DELETE
                       FROM building
                       WHERE id = ?`
