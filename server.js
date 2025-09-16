require('dotenv').config(); // load in my .env variables
const express = require('express'); // import express app

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(process.env.PORT, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
