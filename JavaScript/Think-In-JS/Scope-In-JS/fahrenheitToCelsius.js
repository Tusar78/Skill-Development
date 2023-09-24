const celsius = +prompt("Enter Celsius value.");

const getFahrenheit = c => {
  const celsius = (c * 1.8) + 32;
  return celsius;
}

const fahrenheit = getFahrenheit(celsius);

console.log(`${celsius} Celsius = ${fahrenheit.toFixed(0)} Fahrenheit`);