/**
 * Created by duzhong on 16/7/15.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//构造模型
var newsSchema= new Schema({
    title:String,
    content:String,
    isShow:{type:Boolean,default:true},
    createTime:{type:Date,default:Date.now}
});


newsSchema.methods.AddNews=function(model,callback)
{


    console.log('---content2----is:'+model.content2);




    this.title=model.title;
    this.content=model.content;
    this.isShow=model.isShow;
    this.createTime=model.createTime;
    this.save(callback);

    console.log('insert success');
}

var NewsModel=mongoose.model('NewsModel',newsSchema);

module.exports=NewsModel;