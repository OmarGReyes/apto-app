"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var path = require("path");

var exphbs = require("express-handlebars");

var methodOverride = require("method-override");

var _handlebars = require('handlebars');

var _require = require('@handlebars/allow-prototype-access'),
    allowInsecurePrototypeAccess = _require.allowInsecurePrototypeAccess;

var helpers = require('handlebars-helpers'); //Initialization 


require('./database'); //Settings


_app["default"].set("port", process.env.PORT || 4000); //available port or 3000


_app["default"].set("views", path.join(__dirname, "views")); //Looking for views folder


_app["default"].engine(".hbs", exphbs({
  defaultLayout: "main",
  layoutsDir: path.join(_app["default"].get("views"), "layouts"),
  //views folder + layouts
  partialsDir: path.join(_app["default"].get("views"), "partials"),
  //Bars and things like that
  extname: ".hbs",
  handlebars: allowInsecurePrototypeAccess(_handlebars),
  helpers: require('./helpers/helpers')
}));

_app["default"].set("view engine", ".hbs", 'handlebars'); //Middlewares


_app["default"].use(express.urlencoded({
  extended: false
})); //Encode URL


_app["default"].use(methodOverride("_method")); //modificado
//app.use(require("./routes/users")); //modificado
//Static Files


_app["default"].use(express["static"](path.join(__dirname, "public")));

_app["default"].listen(_app["default"].get("port"), function () {
  console.log("Server on port: ", _app["default"].get("port"));
});