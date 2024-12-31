// create a function to reverse a string 
function reverseString(str){
return str.split('').reverse('').join('');

}
const originalString = "ArslanShoukat";
const rerversedString = reverseString(originalString);
console.log(rerversedString) 
document.write(rerversedString) 

// we can also do this by using for loop in over program
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test the function
const testingString = "JavaScript";
const reversedString = reverseString(testingString);
console.log(reversedString); // Output: "tpircSavaJ"
