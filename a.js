// var Amperize = require('amperize');

// var html = '<img src="https://example.com/image.jpg" />';

// var amperize = new Amperize();

// amperize.parse(html, function (error, result) {
//     if (error) {
//         // do something with error
//         console.log(error)
//         return new Error(err);
//     }
//     // do something with result
//     console.log(result)
//     return result;
// });
// var {extract} = require('oembed-parser');

// let url = 'https://www.youtube.com/watch?v=8jPQjjsBbIc';

// extract(url).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err);
// });
var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/friday",{ useNewUrlParser: true },function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Yes,YOU GOT IT")
  }
})