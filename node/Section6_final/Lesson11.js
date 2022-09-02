const weather = require("./utils/weather");
const geocode = require("./utils/geocode");

geocode("Sarijadi", (error, data) => {
  if (error) {
    return console.log(error);
  }
  weather(data.location, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});