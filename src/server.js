require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express();
const port = process.env.PORT;




// A simple SELECT query
connection.query(
    'SELECT * FROM `Users` WHERE `name` = "hoidanit" ',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(err); // fields contains extra meta data about results, if available
    }
  );


//config template engine
configViewEngine(app)

//routes
app.use('/', webRoutes);





app.listen(port, () => {
    console.log(`app is running on  port ${port}`)
})