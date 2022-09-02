const https = require("https");
const url = "https://api.weatherstack.com/current?access_key=68590fade5fda345d122f5fcbd463b09?query=Boston";

const request = https.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An Error ", error);
});

request.end();