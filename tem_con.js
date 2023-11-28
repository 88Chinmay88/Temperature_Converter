function convertTemperature() {
    // Get input values
    var temperatureInput = document.getElementById('temperature').value;
    var unitInput = document.getElementById('F_unit').value;
    
  
    // Validate input as a number
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
  
    // Convert temperature based on the selected unit
    var convertedTemperature;
    var resultUnit;
    if (unitInput === 'celsius') {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      resultUnit = 'Fahrenheit';
    } else if (unitInput === 'fahrenheit') {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      resultUnit = 'Celsius';
    } else if (unitInput === 'kelvin') {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      resultUnit = 'Kelvin';
    }

    
  
    // Display the result
    document.getElementById('result').innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
  }
  