var express = require("express");
var serverless = require("serverless-http");

var indexRouter = require("../routes/index");

var app = express();

app.use("/.netlify/functions/app", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports.handler = serverless(app);
