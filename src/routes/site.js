const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Define the route for '/news'
router.use('/:slug', siteController.search);
router.use('/', siteController.index);

module.exports = router;
