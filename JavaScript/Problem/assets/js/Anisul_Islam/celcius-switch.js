console.log(`I you press f then convert -> Fahrenheit to Celsius`);
console.log(`I you press c then convert -> Celsius to Fahrenheit`);

let convertText = prompt("Fahrenheit to Celsius write 'f' & Celsius to Fahrenheit write 'c'");

const toCelsius = f => {
  let celsius = (f - 32) * 5/9;
  return celsius;
}

const toFahrenheit = c => {
  let fahrenheit = (c * 9/5) + 32;
  return fahrenheit;
}

switch (convertText) {
  case 'f':
    let valueOfFahrenheit = prompt("Enter Fahrenheit value: ");
    let getFahrenheit = toCelsius(valueOfFahrenheit)
    console.log(Math.round(getFahrenheit));
    break;
  case 'c':
    let valueOfCelsius = prompt("Enter Celsius value: ");
    let getCelsius = toFahrenheit(valueOfCelsius)
    console.log(Math.round(getCelsius));
    break;
  default:
    break;
}
