import express from 'express'
import morgan from 'morgan'
import path from 'path'
import exphbs from 'express-handlebars'
import _handlebars from 'handlebars'
import helpers from 'handlebars-helpers'
import methodOverride from "method-override"
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import {createRoles} from './libs/inicialSetup'
import usersRoutes from './routes/users.routes'



const app = express();
createRoles();
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
app.use('/users', usersRoutes)

//Settings
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

//Routes
app.use(require("./routes/aptos"));
app.use(require("./routes/index")); //modificado
//app.use(require("./routes/users")); //modificado

//Static Files
app.use(express.static(path.join(__dirname, "public")));
export default app;