function convertTemperature() {
    // Get input value and selected conversion type
    const temp = parseFloat(document.getElementById('temperature').value);
    const conversion = document.getElementById('conversion').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(temp)) {
        resultDiv.textContent = "Please enter a valid temperature.";
        return;
    }

    // Perform conversion
    let result;
    if (conversion === "cToK") {
        result = temp + 273.15; // Celsius to Kelvin
        resultDiv.textContent = `${temp}°C is equal to ${result.toFixed(2)} K.`;
    } else if (conversion === "kToC") {
        result = temp - 273.15; // Kelvin to Celsius
        resultDiv.textContent = `${temp} K is equal to ${result.toFixed(2)}°C.`;
    }
}