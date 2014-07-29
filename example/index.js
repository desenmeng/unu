/**
 * Created by mdemo on 2014/7/29.
 */
var unu = require('..');
unu('http://m.baidu.com',{userAgent:'IPHONE'},function(result){
    console.log(result.unused);
    console.log(result.used);
});