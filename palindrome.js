// function checkPalindrome() {
//     // Get the input value
//     const input = document.getElementById("inputText").value;
    
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Reverse the cleaned input
//     const reversedInput = cleanedInput.split('').reverse().join('');
    
//     // Check if the cleaned input is the same as its reverse
//     const resultElement = document.getElementById("result");
//     if (cleanedInput === reversedInput) {
//         resultElement.textContent = `"${input}" is a palindrome!`;
//         resultElement.style.color = "green";
//     } else {
//         resultElement.textContent = `"${input}" is not a palindrome.`;
//         resultElement.style.color = "red";
//     }
// }

function checkPelindrome(){
    // take the value of input
    const input = document.getElementById('inputText').value;
    // to clean our given input 
    const cleanedinput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // to reverse our string 
    const reversedinput = cleanedinput.split('').reverse('').join('');
    // final result 
    const resultElement = document.getElementById('result');
    if(cleanedinput === reversedinput){
        resultElement.textContent = `${input} is palindrome`
        resultElement.style.color = "green";
    }
    else{
        resultElement.textContent = `${input} is not palindrome`
        resultElement.style.color = "red" ;
    }
}

document.getElementById('btn').addEventListener("click", checkPelindrome);