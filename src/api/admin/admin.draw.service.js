exports.registerBluePrint = (request, response) => {
  const {data} = request.body
  const file = request.file


  console.log(JSON.parse(data))
  console.log(file)


  response.send('test')
}
