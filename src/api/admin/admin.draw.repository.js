exports.saveBuilding = `INSERT INTO building(name, floor) VALUE (?,?)`
exports.saveRooms = (params) => `INSERT INTO room(building, room_no, professor_name, room_size, max_user) VALUES ${params}`
