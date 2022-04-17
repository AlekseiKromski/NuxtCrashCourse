const router = require('express').Router();
const passport = require('passport');
const Post = require('../models/post');
const upload = require('../middleware/upload')
// /api/post

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//ADMIN - will be protected by Passport.js
router.post('/admin/', [passport.authenticate('passport-jwt'), upload.single('image', {session: false})], async (req,res) =>{
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    imageUrl: `/${req.file.filename}`
  });
  try{
    await post.save();
    res.status(201).json(post);
  }catch (e){
    console.error(e);
    res.status(500).json({"message": "server error"});
  }
});

router.get('/admin/', passport.authenticate('passport-jwt', {session: false}), async (req,res) =>{

  try{
    const posts = await Post.find().sort([['date', -1]]);

    res.status(200).json(posts);
  }catch (e){
    res.status(500).json({"message": "server error"});

  }
})

router.get('/admin/:id', passport.authenticate('passport-jwt', {session: false}), async (req,res) =>{
  try{
    res.status(200).json(
      await Post.findById(req.params.id)
        .sort([['date', -1]])
        .populate('comments')
        .exec()
    )
  }catch (e){
    console.log(e)
    res.status(500).json({"message": "server error"});

  }
})

//update single post
router.put('/admin/:id', passport.authenticate('passport-jwt', {session: false}), async (req,res) =>{
  try{
    const $set = {
      text: req.body.text
    }
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set
    }, {
      new: true
    });
    console.log(post)
    res.status(200).json(post);
  }catch (e){
    console.log(e)
    res.status(500).json({"message": "server error"});

  }
})

//remove single post
router.delete('/admin/:id', passport.authenticate('passport-jwt', {session: false}), async (req,res) =>{
  try{
    await Post.deleteOne({_id: req.params.id});
    res.status(200).json({"msg": "ok"});
  }catch (e){
    console.log(e)
    res.status(500).json({"message": "server error"});

  }
})

//BASE
//return all posts
router.get('/', async (req,res) => {
  try{
    const posts = await Post.find().sort({date: -1});
    res.status(200).json(posts);
  }catch (e){
    console.log(e)
    res.status(500).json({"message": "server error"});

  }
})

router.get('/:id', async (req,res) => {
  try{
    res.status(200).json(await Post.findById(req.params.id).sort({date: -1}).populate('comments').exec((e, post) => {
      res.json(post);
    }));
  }catch (e){
    console.log(e)
    res.status(500).json({"message": "server error"});

  }
})

//set new view
router.put('/:id', async (req,res) => {
  const $set = {
    views: ++req.body.views
  }

  try{
    const post = await Post.findOneAndUpdate({
      _id: req.param.id
    },{$set});

    res.status(204).json({"msg": "ok"})
  }catch (e){

  }
})

module.exports = router;


