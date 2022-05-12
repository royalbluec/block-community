const express = require('express');
const {
  usersController,
  usersDetailController,
} = require('../controllers/usersController');
const router = express.Router();

router.get('/v1/users', usersController.get);

router.post('/v1/users', usersController.post);

router.get('/v1/users/:id', usersDetailController.get);

router.put('/v1/users/:id', usersDetailController.put);

router.delete('/v1/users/:id', usersDetailController.delete);

module.exports = router;
