const axios = require("axios");

const data = {
  name: "John Doe",
  email: "asd@gmail.com",
};

// const sleep = async (delay) => {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// };

// setInterval(() => {
//   let total = 0;
//   for (let index = 0; index < 50; index++) {
//     axios
//       .post("http://localhost:5000/test", data)
//       .then((res) => {
//         if (res.status === 200) {
//           total++;
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//     sleep(100);
//   }
//   sleep(5000);
//   console.log(total);
//   return total;
// }, 1000);

// const sleep = async (delay) => {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// };

// const sendReq = async (count, delay) => {
//   let total = 0;
//   for (let index = 0; index < count; index++) {
//     await axios
//       .post("http://localhost:5000/test", data)
//       .then((res) => {
//         total++;
//       })

//       .catch((err) => {
//         console.error(err);
//       });
//     await sleep(delay);
//   }
//   await sleep(2000);
//   return total;
// };

// console.log(sendReq(5, 1000));

const sleep = async (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const sendReq = async (count, delay) => {
  let total = 0;
  for (let i = 0; i < count; i++) {
    const response = await axios.post("http://localhost:5000/test", data);
    if (response.status === 200) {
      total++;
    }
    await sleep(delay);
  }
  await sleep(5);
  return total;
};

sendReq(40, 1000);
