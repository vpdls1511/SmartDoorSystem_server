module.exports = (response) => {
  return {
    SUCCESS: (message, payload) => {
      response.json({
        status: 200,
        message: message,
        payload,
      })
    },
    BAD_REQUEST: (message) => {
      response.json({
        status: 400,
        message: message,
      })
    }
  }
}
