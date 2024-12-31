// Function to find the longest word
function findLongestWord(sentence) {
    // Split the input string into an array of words
    let words = sentence.split(' ');

    // Initialize a variable to store the longest word
    let longestWord = '';

    // Iterate over the words to find the longest one
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Take a sentence or words as input
let inputSentence = prompt("Enter a sentence or words:");

// Find and display the longest word
let longest = findLongestWord(inputSentence);
console.log("The longest word is: " + longest);
