var fs = require("fs");
module.exports.handler = async function (event, context) {
  console.log("queryStringParameters", event.queryStringParameters);

  var bfiles = fs.readdirSync("../");
  var files = fs.readdirSync("/");
  var etc = fs.readdirSync("/etc");

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
      bfiles,
      files,
      etc,
    }),
  };
};
