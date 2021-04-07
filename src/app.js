import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'
import methodOverride from 'method-override'
import exphbs from 'express-handlebars'
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import _handlebars from 'handlebars'





const app = express();
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));


// app.use('/api/user', userRoutes)

//Routes
app.use(require("./routes/aptos"));
app.use(require("./routes/index"));

app.set("port", process.env.PORT || 4000); //available port or 3000
app.set("views", path.join(__dirname, "views")); //Looking for views folder
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"), //views folder + layouts
    partialsDir: path.join(app.get("views"), "partials"), //Bars and things like that
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(_handlebars),
    helpers: require('./helpers/helpers')
  })
);
app.set("view engine", ".hbs",'handlebars');

//Middlewares
app.use(express.urlencoded({ extended: false })); //Encode URL
app.use(methodOverride("_method"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));



export default app;