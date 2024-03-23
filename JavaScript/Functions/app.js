//Not a Pure Function

var num = 10;
console.log(num);

function setFunc() {
    num = 20;
}

setFunc();

console.log(num);

