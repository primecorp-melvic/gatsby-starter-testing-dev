var fs = require("fs");
module.exports.handler = async function (event) {
  console.log("queryStringParameters", event.queryStringParameters);
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
      files: fs.readdirSync("./src/pages/blog"),
    }),
  };
};
