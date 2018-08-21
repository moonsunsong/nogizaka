
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var count = document.getElementById("count");

require('./main.css');
require('./main.scss');

count.onclick = function(){
    var add = require('./calc.js');
    num3.value = add(parseFloat(num1.value),parseFloat(num2.value));
}
    
