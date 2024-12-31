
// Function to generate a random number and display it in the input field
function generateRandomNumber() {
  // generate a random number between 1 to 100
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  // display random number in the input field
  document.getElementById("randomNumberInput").value = randomNumber;
}
document
  .getElementById("generateButton")
  .addEventListener("click", generateRandomNumber);
