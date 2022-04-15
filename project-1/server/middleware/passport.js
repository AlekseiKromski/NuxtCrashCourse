const {Strategy, ExtractJwt} = require('passport-jwt')
const {model} = require('mongoose');

const User = model('users');
const Option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "aboba"

}


module.exports = new Strategy(option, async (payload, done) =>{
  try {
    const candidate = await User.findById(payload.userId).select("id")

    if(!candidate){
      done(false)
    }else{
      done(null, candidate)
    }
  }catch (e){
    console.log(e)
  }
})
