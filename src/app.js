import express from 'express'
import morgan from 'morgan'

import _handlebars from 'handlebars'





const app = express();
app.use(express.json())
app.use(morgan('dev'))


// app.use('/api/user', userRoutes)

//Routes
app.use(require("./routes/aptos"));
app.use(require("./routes/index"));


export default app;