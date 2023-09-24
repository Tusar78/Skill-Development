const fahrenheit = +prompt("Enter Fahrenheit value.");

const getCelsius = f => {
  const celsius = (5 * (f - 32)) / 9;
  return celsius;
}

const celsius = getCelsius(fahrenheit);

console.log(`${fahrenheit} Fahrenheit = ${celsius.toFixed(0)} Celsius`);