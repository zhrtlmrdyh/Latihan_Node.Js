const geocode = require("./utils/geocode");

geocode("Sarijadi", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});