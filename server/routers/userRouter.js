const express = require('express');
const router = express.Router();
const {
  userController,
  userDetailController,
} = require('../controllers/userController');
const authChecker = require('../middlewares/authChecker');

router.get('/v1/users', userController.get);

router.post('/v1/users', userController.post);

router.get('/v1/users/:id', authChecker, userDetailController.get);

router.put('/v1/users/:id', userDetailController.put);

router.delete('/v1/users/:id', userDetailController.delete);

module.exports = router;
