const express = require('express');
const router = express.Router();
const {User,Blog,Comment} = require('../models');

router.get("/",(req,res)=>{
    Comment.findAll().then(comments=>{
        res.json(comments)
    })
    .catch(err =>{
        res.status(500).json({ msg:"an error occured",err})
    });
});

router.post("/",(req,res)=>{
    Comment.create({
        BlogId: req.params.id,
        UserId: req.session.user.id,
        commentBody: req.body.commentBody
    }).then(commentData=>{
        res.json(commentData)
    }).catch (err=>{
    console.log(err)
    });
});

module.exports = router;