function convertToFar() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    if (celsiusInput.value === "") {
      alert("Please enter a valid temperature in Celsius.");
      return;
    }
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
  
  function convertToCel() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    if (fahrenheitInput.value === "") {
      alert("Please enter a valid temperature in Fahrenheit.");
      return;
    }
  
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
  
    celsiusInput.value = celsius.toFixed(2);
  }
  