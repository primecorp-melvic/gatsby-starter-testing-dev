var fs = require("fs");
module.exports.handler = async function (event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);
  console.log("context", context);
  console.log("callback", callback);

  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10),
      context,
      callback
    }),
  };
};
