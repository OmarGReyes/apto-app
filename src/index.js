// const express = require("express");
// const path = require("path");
// const exphbs = require("express-handlebars");
// const methodOverride = require("method-override");
// const _handlebars = require('handlebars');
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
// var helpers = require('handlebars-helpers')


//Initialization 
import app from './app'

require('./database');

//Settings
// app.set("port", process.env.PORT || 4000); //available port or 3000
// app.set("views", path.join(__dirname, "views")); //Looking for views folder
// app.engine(
//   ".hbs",
//   exphbs({
//     defaultLayout: "main",
//     layoutsDir: path.join(app.get("views"), "layouts"), //views folder + layouts
//     partialsDir: path.join(app.get("views"), "partials"), //Bars and things like that
//     extname: ".hbs",
//     handlebars: allowInsecurePrototypeAccess(_handlebars),
//     helpers: require('./helpers/helpers')
//   })
// );
// app.set("view engine", ".hbs",'handlebars');

// //Middlewares
// app.use(express.urlencoded({ extended: false })); //Encode URL
// app.use(methodOverride("_method"));

//  //modificado
// //app.use(require("./routes/users")); //modificado

// //Static Files
// app.use(express.static(path.join(__dirname, "public")));



app.listen(app.get("port"), () => {
  console.log("Server on port: ", app.get("port"));
});

