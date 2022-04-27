const express = require('express');
const config = require('./config.json');

const app = express();

// Add body-parser
app.use(require('body-parser').json());

// Add Rules API
require('./rules-api')(app);

app.get('/', (req, res) => {
  const domain = req.get('x-forwarded-host')
  res.send(domain);
})

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }

  console.info(`Rest Server listening on : http://localhost:${config.port}`);
});
