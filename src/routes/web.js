const express = require('express');
const router = express.Router();





router.get('/', function (req, res) {
    // res.send('hello world')
    res.render('sample.ejs')
  })

module.exports = router;