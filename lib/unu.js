/**
 * Created by mdemo on 2014/7/29.
 */
var request = require('request');
var cheerio = require('cheerio');

var userAgents = require('./useragents');
var cssParse = require('./cssParse');

function unu(uri, opt, cb) {
    var url,
        options,
        callback;
    if (!uri) {
        throw new TypeError('unu: expected a url');
    } else {
        url = uri;
    }
    if (typeof opt === 'function') {
        options = {};
        callback = opt;
    } else if (typeof opt === 'object' && typeof cb === 'function') {
        options = opt;
        callback = cb;
    } else {
        throw new TypeError('unu: expected a callback');
    }
    options.userAgent = options.userAgent || userAgents.ANDROID;

    request({url:url,headers:{'User-Agent':options.userAgent}},function(error,response,html){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            var styles = '';
            $('style').each(function(index,value){
                styles += $(value).text();
            });
            var rules = cssParse(styles);
            var unused = [],used = [];
            for (var i = 0, l = rules.length; i < l; i++) {
                var rule = rules[i];
                if(rule && rule.indexOf('[')==-1 && rule.indexOf(':')==-1){
                    if($(rule).length >=1){
                        used.push(rule);
                    }
                    else{
                        unused.push(rule)
                    }
                }
            }
            callback({used:used,unused:unused});
        }else{
            throw new TypeError(error);
        }
    });
}


module.exports = unu;