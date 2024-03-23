const Guardian = require("./Person");
const { Contact, Address } = require("./Contact");

const guardian = new Guardian(1, 'Esharot Ali', 'Farmer', 75000);
const Contact = new Contact(4, 'tus@gmail.com', '45556');
console.log(Contact.Guardian);
console.log(guardian);

