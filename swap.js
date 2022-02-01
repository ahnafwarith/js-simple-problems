var firstNumber = 20;
var secondNumber = 10;
console.log(firstNumber, secondNumber);

// swap using temp
// var temp = firstNumber;
// firstNumber = secondNumber;
// secondNumber = temp;
// console.log(firstNumber, secondNumber);

// destructure
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log(firstNumber, secondNumber);
