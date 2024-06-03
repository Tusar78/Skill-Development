const dateContainer = document.querySelector(".date");

// Date Generate
const getDT = () => {
  // Date Object
  const DATE = new Date();
  const day = DATE.getDate();
  const month = DATE.getMonth();
  const year = DATE.getFullYear();

  dateContainer.innerText = `${day < 10 ? `0${day}` : `${day}` } - ${month < 10 ? `0${month}` : `${month}` } - ${year}`
};

getDT();
