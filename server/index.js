var express=require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser')
var app=express();
var multer = require('multer')
var upload = multer({ dest: './uploads/' })
var trya = require('./router/try');
var storea = require('./router/store');
var fileS=require('./model/file')
var fs=require('fs')
// 连接mongoose
mongoose.connect("mongodb://localhost:27017/friday",{ useNewUrlParser: true }).then(
    () => { console.log('I did connect to db.')},
    err => {console.log('something happend',err)}
  );
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else  next();
});
app.use(bodyParser.urlencoded({limit: '150mb', extended: true }))
// parse application/json
app.use(bodyParser.json({limit: '150mb'}))
app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res){
    console.log("I AM NEW.")
    res.json({haha:'Ok ,I am here'})
})
app.use('/try',trya)
app.post('/image',function(req,res,next){
    const imgs=req.body.data;
    if(imgs){
        var base64Data = imgs.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        fs.writeFile("newimage.png", dataBuffer, function(err) {
            if(err){
                console.log('no ,more time')
                res.send(err);
            }else{
                console.log('yes,ok')
                res.json({"yes": "I got you."})
    
            }
        });
    }
    
})
app.post('/haha',upload.array('file'),function(req,res,next){
    var storefile= async function(o){
        var haha=await fileS.find({filename:o.name});
        if(haha.name){
            fileS.update({filename:o.name},o)
        }else{
            fileS.insertMany([o])
        }
    }
    if(req.files){
        var data=req.files;
        storefile(data[0])
    }
    res.json({"yes":"I get"});
})
app.listen(app.get('port'),function(){
    console.log('你是否看到.....')
})
