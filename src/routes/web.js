const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/HomeController')



router.get('/', HomeController.getHomePage);
router.get('/create', HomeController.getCreatePage);
router.post('/create-user', HomeController.postCreateUser);

module.exports = router;