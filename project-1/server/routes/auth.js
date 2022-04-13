const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
router.post('/admin/login', async (req,res) => {
  const candidate = await User.findOne({
    login: req.body.login
  })

  if (candidate){
    if (bcrypt.compareSync(req.body.password, candidate.password)){
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id
      }, new Date() + "aboba", {
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

router.post('/admin/create', (req,res) => {

})



module.exports = router;
