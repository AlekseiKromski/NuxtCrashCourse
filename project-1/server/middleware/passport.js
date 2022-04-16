const {Strategy, ExtractJwt} = require('passport-jwt')
// const {model} = require('mongoose')
const User = require('../models/user')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "aboba"
}

module.exports = new Strategy(options, async (payload, done) => {
  try {
    console.log('ee')
    const candidate = await User.findById(payload.userId).select('id')

    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (e) {
    console.error(e)
  }
})
