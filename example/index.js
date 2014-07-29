/**
 * Created by mdemo on 2014/7/29.
 */
var unu = require('..');
unu('http://m.baidu.com/s?word=love',function(error,result){
    if(!error){
        console.log(result);
    }
});