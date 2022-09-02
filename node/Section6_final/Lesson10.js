const weather = require("./utils/weather");

weather("Sarijadi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});