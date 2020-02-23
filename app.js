const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes
const results = require('./routes/results');

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`listening on port: ${port}`);
});

module.exports = app;
