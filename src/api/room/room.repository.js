exports.getAllRoomQuery = `SELECT b.*,
                                  JSON_ARRAYAGG(
                                          JSON_OBJECT(
                                                  'build', r.building,
                                                  'room_no', r.room_no,
                                                  'professor_name', r.professor_name,
                                                  'room_size', r.room_size,
                                                  'now_user', r.now_user,
                                                  'max_user', r.max_user
                                              )
                                      )  as room,
                                  f.path as path
                           FROM room r
                                    JOIN building b ON b.id = r.building
                                    JOIN file f ON f.parent_id = b.id
                           GROUP BY b.name;`

exports.getRoomDetailQuery = `SELECT *
                              FROM room r
                              WHERE building = ?`
