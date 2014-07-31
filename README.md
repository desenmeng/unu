unu
===

unused css

###  GUI 

[unu-web][1]

### Install

```
npm install unu
```

### Basic Usage
``` js
var unu = require('unu');
unu('http://m.baidu.com',function(error,css){
    if(!error){
        console.log(css.unused);
        console.log(css.used);
    }
});
```

### Advanced Usage
```js
var unu = require('..');
//default ANDROID,you can use ANDROID IPHONE IPAD WP
unu('http://m.baidu.com',{userAgent:'IPHONE'},function(error,css){
    if(!error){
        console.log(css.unused);
        console.log(css.used);
    }
});
```

### ToDo

* support link stylesheet



  [1]: https://github.com/demohi/unu-web