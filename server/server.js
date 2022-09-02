const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// routes included
const contactRouter = require('./routes/contact.router');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/contact', contactRouter);

// serve static files
app.use(express.static('build'));

// app set
const PORT = process.env.PORT || 5001;

// listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
