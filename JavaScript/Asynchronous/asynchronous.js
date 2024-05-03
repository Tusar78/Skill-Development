// const processOrder = () => {
//     console.log('Process Order Inner');

//     // const currentTime = new Date().getTime();
//     // while (currentTime + 3000 >= new Date().getTime());

//     setTimeout(() => {
//         console.log('Inner Set time out function');
//     }, 3000);

//     console.log('Process Order Inner Complete');
// }

// console.log('Project Order 1');
// processOrder()
// console.log('Project Order 2');

// const takeOrder = (customer, callback) => {
//   console.log(`Take Order From ${customer}`);
//   callback(customer);
// };

// const processOrder = (customer, callback) => {
//   console.log(`Order processing for ${customer}`);
//   setTimeout(() => {
//     console.log(`Order Cooked`);
//     console.log(`Order processed for ${customer}`);
//     callback(customer)
//   }, 3000);
// };

// const orderComplete = (customer) => {
//   console.log(`Order completed for ${customer}`);
// };

// takeOrder(`Tusar`, (customer) => {
//     processOrder(customer, (customer) => {
//         orderComplete(customer)
//     })
// });

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingDetails = {
//       name: "Iftar Party",
//       location: "Physical",
//       time: "4:00pm",
//     };
//     resolve(meetingDetails);
//   } else {
//     reject(new Error("Meeting already sceduled!"));
//   }
// });

// const anotherMeeting = (meet) => {
//     const calander =  `name: ${meet.name} location: ${meet.location} and time: ${meet.time}`;
//     return Promise.resolve(calander);
// }

// meeting
//   .then(anotherMeeting)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise.all and Promise.race
// const promise1 = Promise.resolve("Promise 1 Resolve");
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 Resolve");
//   }, 3000);
// });

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

// Promise.all([promise1, promise2]).then((res) => console.log(res));
// Promise.race([promise1, promise2]).then((res) => console.log(res));

