function calculateFactorial() {
    // Get the input value
    const number = parseInt(document.getElementById('numberInput').value);
    
    // Validate input
    if (isNaN(number) || number < 0) {
        document.getElementById('result').textContent = "Please enter a valid non-negative integer.";
        return;
    }

    // Calculate factorial
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    document.getElementById('result').textContent = `The factorial of ${number} is ${factorial}.`;
}