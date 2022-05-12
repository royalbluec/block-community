require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const usersRouter = require('./routers/usersRouter');
const boardsRouter = require('./routers/boardsRouter');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());

app.use('/', usersRouter);
app.use('/', boardsRouter);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })

  .then(() => console.log('DB 연결'))
  .catch((e) => console.error(e));

app.listen(process.env.PORT, () =>
  console.log(`${process.env.PORT}번 포트에서 대기중`)
);
