var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.json({try:"hahhahha"})
})
module.exports = router;