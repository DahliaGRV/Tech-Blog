const express = require('express');
const router = express.Router();
const {User,Blog,Comment} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({
        include: [
            {
              model: Comment,
              include: {
                model: User,
                attributes: ['username']
              }
            },
        
            {
                model:User,
                attributes:['username']
            }
        ]
    }).then(blogs=>{
        console.log(blogs)
        const hbsBlogs = blogs.map(blog=>blog.get({plain:true}))
        console.log("==========")
        console.log(hbsBlogs)
        const loggedIn = req.session.user?true:false
        res.render("home",{blogs:hbsBlogs,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/profile",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[Blog]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("profile",hbsData)
    })
})

module.exports = router;