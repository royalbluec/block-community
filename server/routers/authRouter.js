const express = require('express');
const { authController } = require('../controllers/authController');
const router = express.Router();

router.post('/v1/auth', authController.post);

module.exports = router;
