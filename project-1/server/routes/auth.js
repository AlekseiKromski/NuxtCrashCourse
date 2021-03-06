const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport');
router.post('/admin/login', async (req,res) => {
  const candidate = await User.findOne({
    login: req.body.login
  })

  if (candidate){
    if (bcrypt.compareSync(req.body.password, candidate.password)){
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      },"aboba", {
        expiresIn: 60*60
      })
      return res.json({token})
    }else{
      res.status(500).json({"msg": "Incorrect password"})

    }

  }else{
    res.status(500).json({"msg": "Incorrect login"})
  }
})

router.post('/admin/create', passport.authenticate('passport-jwt', {session: false}), async (req,res) => {
  const candidate = await User.findOne({login: req.body.login});
  if(!candidate){
    const salt = bcrypt.genSaltSync(10);
    const user = await User.create({
      login: req.body.login,
      password:bcrypt.hashSync(req.body.password, salt)
    })

    await user.save();
    res.status(201).json(user);
  }else{
    return res.status(409).json({'message': "this login already exist"})
  }
})



module.exports = router;
