module.exports = {

  hey: {
    get: (req, params, env, callback) => {
      try {
        return callback (null, { message: "Hello, this is Glo 🌺" });
      } catch (err) {
        return callback(err)
      }
    }
  },
}