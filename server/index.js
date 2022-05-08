require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`${process.env.PORT}번 포트에서 대기중`)
);
