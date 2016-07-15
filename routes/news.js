/**
 * Created by duzhong on 16/7/15.
 */
var express = require("express");
var router  = express.Router();
var NewsModel= require('../models/News');

router.get('/',function(req,res){
    res.render('_index',{title:'我是标题',action:'默认'});
});

module.exports=router;


//添加数据链方式
router.get('/addnews',function(req,res){
    res.render('addnews',{title:'我是标题',action:'添加'});
}).post('/addnews',function(req,res){
    var _newsModel=new NewsModel();
    _newsModel.AddNews({
        title:req.body.title,
        content:req.body.content,
        isShow:req.body.isShow,
        createTime:req.body.createTime
    },function(){
        res.send('<a href="/news">添加成功</a>');
    });
});