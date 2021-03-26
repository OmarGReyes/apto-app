import express from 'express'
import morgan from 'morgan'

import _handlebars from 'handlebars'

import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access'
import authRoutes from './routes/auth.routes'

import {createRoles} from './libs/inicialSetup'
import usersRoutes from './routes/users.routes'



const app = express();
createRoles();
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)
app.use('/users', usersRoutes)
//Routes
app.use(require("./routes/aptos"));
app.use(require("./routes/index"));


export default app;