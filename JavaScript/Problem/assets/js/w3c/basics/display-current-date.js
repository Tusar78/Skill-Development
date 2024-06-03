/*
1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

// Neccessay Refference
const day = document.querySelector(".day");
const time = document.querySelector(".time");

// All Off Days
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];

// Date Object
const DATE = new Date();
// console.log(days[date.getDay()]);

// setTimeout(() => {
//   console.log(date.getHours() - 12);
//   console.log(date.getMinutes());
//   console.log(date.getSeconds());
// }, 1000);

setInterval(() => {
//   const date = new Date();
//   console.log(date.getHours() - 12);
//   console.log(date.getMinutes());
//   console.log(date.getSeconds());
}, 1000);

// Day Function
const dayGenerate = (days, dateObj) => {
    const getIndex = dateObj.getDay();
    const getDay = days[getIndex];
    day.innerText = `Today: ${getDay}`;
}
dayGenerate(DAYS, DATE);

// Time Function
const timeGenerate = () => {
    setInterval(() => {
        const DATE = new Date();
        const getHour = DATE.getHours();
        const getHr = getHour > 12 ? getHour - 12 : getHour;
        const amPm = getHour > 12 ? "PM" : "AM";

        const getMinutes = DATE.getMinutes();
        const getMinute = getMinutes < 10 ? `0${getMinutes}` : `${getMinutes}`;
        
        const getSecond = DATE.getSeconds()
        const getSec = getSecond < 10 ? `0${getSecond}` : `${getSecond}`;
        time.innerText = `Current time is: ${getHr == 0 ? 12 : getHr}${amPm} : ${getMinute} : ${getSec}`;
    }, 1000);
}
timeGenerate();