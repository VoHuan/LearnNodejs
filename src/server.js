require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT;



//config template engine
configViewEngine(app)

//routes
app.use('/', webRoutes);



app.listen(port, () => {
    console.log(`app is running on  port ${port}`)
})