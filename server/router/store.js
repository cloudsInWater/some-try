var express = require('express');
var router = express.Router();
var fileS = require('./../model/file')
var multer = require('multer')
var upload = multer({
    dest: './uploads/'
})
router.post('/images', function (req, res, next) {
    console.log("===========sssss", req.body);
    const imgData=req.body.data;
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("./../uploads/newimage.png", dataBuffer, function(err) {
        if(err){
          res.send(err);
        }else{
          res.send("保存成功！");
            res.json({"yes": "I got you."})

        }
    });
})
module.exports = router;