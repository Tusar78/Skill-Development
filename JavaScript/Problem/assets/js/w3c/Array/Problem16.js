// Find the leap years in a given range of years.

// Brut force apply
const getLeapYear = (startYear, endYear) => {
  const leapYear = [];
  let noLeapYear = '';
  for (let i = startYear; i < endYear; i++) {
    if (i % 400 == 0) {
      leapYear.push(i);
    } else if (i % 4 == 0 && i % 100 != 0) {
      leapYear.push(i);
    } else {
      noLeapYear = 'No Leap year here in this list';
    }
  }

  if (leapYear.length > 0) {
    return leapYear;
  } else {
    return noLeapYear;
  }
}

const resultLeapYear = getLeapYear(2000, 2025);
console.log(resultLeapYear);