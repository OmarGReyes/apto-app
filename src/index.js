const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const _handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
var helpers = require('handlebars-helpers')


//Initialization 
import app from './app'

require('./database');


app.listen(app.get("port"), () => {
  console.log("Server on port: ", app.get("port"));
});

