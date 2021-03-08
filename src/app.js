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


export default app;