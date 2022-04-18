const router = require('express').Router();
const Comment = require('../models/comment');
const Post = require("../models/post");
///api/comment
router.post('/', async(req,res) => {
  try {

    const comment = await new Comment({
      name: req.body.name,
      text: req.body.text,
      postId: req.body.postId
    }).save();

    const post = await Post.findById(req.body.postId);
    post.comments.push(comment._id)
    await post.save();

    res.status(201).json(comment);
  }catch (e){
    console.log(e)
    res.status(500).json({"msg": "server error"})
  }
})


module.exports = router;
