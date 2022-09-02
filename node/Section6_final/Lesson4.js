const request = require("request");

const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.data[0].Nation);
});
