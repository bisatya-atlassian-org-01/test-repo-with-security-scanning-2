const express = require('express');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const message = _.capitalize('hello from dependabot test repo!');
  res.json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
