var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var shemaFile=new Schema({
    _id:Object,
    encoding:String,
    originalname:String,
    filename:{type:String},
    size:{type:Number},
    mimetype:{type:String,}
})
var filestore=mongoose.model('filestores',shemaFile);
module.exports=filestore
