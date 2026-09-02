console.log("Start");


// setTimeout(fn,2000)


setTimeout(() => {
  console.log("Data received");
}, 2000);

console.log("End");











const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});


const login = new Promise((resolve, reject) => {
  const passwordCorrect = true;

  if (passwordCorrect) {
    resolve("Login successful");
  } else {
    reject("Invalid password");
  }
});


login
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Login process completed");
  });