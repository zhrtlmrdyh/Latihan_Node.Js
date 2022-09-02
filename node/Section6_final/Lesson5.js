const request = require("request");
const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.data[0].Nation + " It is currently has " + response.body.data[0].Population + " population in " + response.body.data[0].Year);
});