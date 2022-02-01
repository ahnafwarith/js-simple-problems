const fibo = [0, 1]
function fibonacci(num) {
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

var upto = fibonacci(10);
console.log(upto);