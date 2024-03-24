// 1 to 10 summation using recursive
let result = 0;
function sumFunc(n) {
    if (n === 5) {
        return
    }

    result += n;    
    sumFunc(n + 1);
}

sumFunc(1)
console.log(result);