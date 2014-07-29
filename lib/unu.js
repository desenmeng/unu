/**
 * Created by mdemo on 2014/7/29.
 */
var request = require('request');
var cheerio = require('cheerio');
var cssom = require('cssom');

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

}


module.exports = unu;