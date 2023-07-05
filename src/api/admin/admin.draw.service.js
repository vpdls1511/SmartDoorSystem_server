const response = require('../common/response');
exports.registerBluePrint = (req, res) => {
  const {data} = req.body
  const file = req.file

  console.log(JSON.parse(data))
  console.log(file)

  response(res).SUCCESS('good', JSON.parse(data))
}
