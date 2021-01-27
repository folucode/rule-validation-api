const express = require('express');

const app = express();
const port = 6000;

app.get('/', (req, res) => {
  const data = {
    name: 'Tosin Moronfolu',
    github: '@folucode',
    email: 'tosinmoronfolu@gmail.com',
    mobile: '08062472514',
    twitter: '@chukwutosin_',
  };

  return res.send({
    message: 'My Rule-Validation API',
    status: 'success',
    data,
  });
});

app.post('/validate-rule', (req, res) => {
  res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
