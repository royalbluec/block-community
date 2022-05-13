const express = require('express');
const {
  boardController,
  boardDetailController,
} = require('../controllers/boardController');
const router = express.Router();

router.get('/v1/boards', boardController.get);

router.post('/v1/boards', boardController.post);

router.get('/v1/boards/:id', boardDetailController.get);

router.put('/v1/boards/:id', boardDetailController.put);

router.delete('/v1/boards/:id', boardDetailController.delete);

module.exports = router;
