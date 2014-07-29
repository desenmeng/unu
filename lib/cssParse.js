/**
 * Created by mdemo on 2014/7/29.
 */
var cssom = require('cssom');
function cssParse(styles){
    var cssRules = cssom.parse(styles).cssRules;
    var rules = cssRules.map(function(rule){
        return rule.selectorText;
    });
    return rules;
}
module.exports = cssParse;