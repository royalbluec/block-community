const express = require('express');
const {
  boardsController,
  boardsDetailController,
} = require('../controllers/boardsController');
const router = express.Router();

router.get('/v1/boards', boardsController.get);

router.post('/v1/boards', boardsController.post);

router.get('/v1/boards/:id', boardsDetailController.get);

router.put('/v1/boards/:id', boardsDetailController.put);

router.delete('/v1/boards/:id', boardsDetailController.delete);

module.exports = router;
