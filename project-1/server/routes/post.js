const router = require('express').Router();
const passport = require('passport');
const Post = require('../models/post');
const upload = require('../middleware/upload')
// /api/post

//ADMIN - will be protected by Passport.js
router.post('/admin/', [passport.authenticate('jwt'), upload.single('image')], {session: false}), async (req,res) =>{

})

router.get('/admin/get-all', passport.authenticate('jwt', {session: false}), async (req,res) =>{

})
router.get('/admin/:id', passport.authenticate('jwt', {session: false}), async (req,res) =>{

})

//update single post
router.put('/admin/:id', passport.authenticate('jwt', {session: false}), async (req,res) =>{

})

//remove single post
router.remove('/admin/:id', passport.authenticate('jwt', {session: false}), async (req,res) =>{

})

//BASE
//return all posts
router.get('/', async (req,res) => {

})

router.get('/:id', async (req,res) => {

})

//set new view
router.put('/:id', async (req,res) => {

})

module.exports = router;


