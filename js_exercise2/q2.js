let temperature={
  clesius:null,
  fahrenheit:null,
  kelvin:null,

  read(){
    this.celsius=Number(prompt("Enter Temperature(In Celsius):"));
    document.querySelector(".output").innerText="Temperature stored. Choose an operation";
  },

  toFahrenheit(){
    this.fahrenheit = (this.celsius * 9) / 5 + 32;
    document.querySelector(".output").innerHTML="Temperature Converted";
  },

  toKelvin(){
    this.kelvin = this.celsius + 273.15;
    document.querySelector(".output").innerHTML="Temperature Converted";
  },

  display(){
  let output = document.querySelector(".output");

  output.innerHTML = "Temperatures:<br><br>";
  output.innerHTML += "Temperature In Celsius: " + this.celsius + "°<br>";
  output.innerHTML += "Temperature In Fahrenheit: " + this.fahrenheit + "°<br>";
  output.innerHTML += "Temperature In Kelvin: " + this.kelvin + "°";
  }
}