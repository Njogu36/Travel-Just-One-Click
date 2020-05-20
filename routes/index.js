const express = require('express');
const route = express.Router();


route.get('/',function(req,res){
    res.render('index.jade')
})
route.get('/about',function(req,res){
    res.render('about.jade')
})
route.get('/tours',function(req,res){
    res.render('tours.jade')
})
route.get('/tour-place',function(req,res){
    res.render('tour-place.jade')
})
route.get('/services',function(req,res){
    res.render('services.jade')
})
route.get('/contact',function(req,res){
    res.render('contact.jade')
})
route.get('/blog',function(req,res){
    res.render('blog.jade')
})
route.get('/hotel-room',function(req,res){
    res.render('hotel-room.jade')
})
route.get('/hotels',function(req,res){
    res.render('hotels.jade')
})



module.exports = route