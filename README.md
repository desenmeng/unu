unu
===

unused css

### Install

```
npm install unu
```

### Basic Usage
``` js
var unu = require('unu');
unu('http://m.baidu.com',function(result){
    console.log(result.unused);
    console.log(result.used);
});
```

### Advanced Usage
```js
var unu = require('..');
//default ANDROID,you can use ANDROID IPHONE IPAD WP
unu('http://m.baidu.com',{userAgent:'IPHONE'},function(result){
    console.log(result.unused);
    console.log(result.used);
});
```

>userAgent options

### ToDo

* support link stylesheet


