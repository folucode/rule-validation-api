const bodyParser = require('body-parser');
const express = require('express');
const { checkRequiredFields } = require('./middlewares/checkRequiredFields');
const { validateFieldType } = require('./middlewares/validateFieldType');
const { validateRuleObject } = require('./middlewares/validateRuleObject');

const app = express();
const port = 6000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

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

app.post(
  '/validate-rule',
  [checkRequiredFields, validateFieldType, validateRuleObject],
  (req, res) => {
    res.send('ok');
  },
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
