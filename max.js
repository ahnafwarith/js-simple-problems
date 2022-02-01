const business = 450;
const minister = 550;
const army = 600;

//------bangla system
/* if (business > minister) {
     console.log("Business man er pola boro");
}
else {
     console.log("Minister pola boro");
} */

//----------using math function
/* var largest = Math.max(army, minister, business);
 console.log("largest is", largest);
 */



//task 1: create a fucntion that takes three numbers as input parameter and returns you the largest number of the three
function getMax(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    }
    else if (number2 > number1 && number2 > number3) {
        return number2;
    }
    else {
        return number3;
    }
}

var largest = getMax(business, army, minister);
console.log("largest is: ", largest);
//task 2: write a function to find the smallest of three numbers