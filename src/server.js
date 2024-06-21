require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express();
const port = process.env.PORT;

// config data input/output
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//config template engine
configViewEngine(app)

//routes
app.use('/', webRoutes);





app.listen(port, () => {
  console.log(`app is running on  port ${port}`)
})