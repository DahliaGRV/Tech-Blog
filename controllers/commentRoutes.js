const express = require('express');
const router = express.Router();
const {User,Blog,Comment} = require('../models');

router.get("/",(req,res)=>{
    Comment.findAll().then(comments=>{
        console.log(comments)
        const hbsComments = comments.map(comments=>comments.get({plain:true}))
        console.log("==========")
        console.log(hbsComments)
        res.render("home",{comments:hbsComments,username:req.session.user?.username})
    })
})

router.post("/:id",(req,res)=>{
    Comment.create({
        commentBody: req.body.commentBody,
        BlogId: req.params.id,
        UserId: req.session.user.id
    }).then(commentData=>{
        res.json(commentData)
    }).catch (err=>{
    console.log(err)
    });
});

module.exports = router;