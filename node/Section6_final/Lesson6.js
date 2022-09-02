const request = require("request");
const url = "http://api.positionstack.com/v1/forward?access_key=96e4d61e6113c70c8a7537df24c6eadd&query=1600 Pennsylvania Ave NW, Washington DC";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});