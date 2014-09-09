var list = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){}]
list.forEach(function(items) {
 console.log('Title: ' + items + ', String: ' + (items + "") + ', Number: ' + (+items) + ', Boolean: ' + (!!items));

});
