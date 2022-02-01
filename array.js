/* var numbers = [12, 11, 123, 33, 36, 38, 23];
var element = 0;
for (var i = 0; i < numbers.length; i++) {
    var no = numbers[i];
    var element = element + no;
}
console.log(element); */

function getArraySum(numbers) {
    var element = 0;
    for (var i = 0; i < numbers.length; i++) {
        var no = numbers[i];
        var element = element + no;
    }
    return element;
}

var output = getArraySum([10, 19, 28, 299]);
console.log(output);