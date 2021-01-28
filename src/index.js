/* eslint-disable consistent-return */
const bodyParser = require('body-parser');
const express = require('express');
const { checkRequiredFields } = require('./middlewares/checkRequiredFields');
const { validateFieldType } = require('./middlewares/validateFieldType');
const { validateRuleObject } = require('./middlewares/validateRuleObject');
const {
  checkEquality,
  checkInequality,
  checkGreaterthan,
  checkGreaterthanEqualto,
  checkContains,
} = require('./utils/validation');

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
    const { rule, data } = req.body;
    const dataKeys = Object.keys(data);

    try {
      if (!dataKeys.includes(rule.field)) {
        return res.status(400).send({
          message: `field ${rule.field} is missing from data.`,
          status: 'error',
          data: null,
        });
      }

      let resultData;

      switch (rule.condition) {
        case 'eq': {
          resultData = checkEquality(rule, data);
          break;
        }
        case 'neq': {
          resultData = checkInequality(rule, data);
          break;
        }
        case 'gt': {
          resultData = checkGreaterthan(rule, data);
          break;
        }
        case 'gte': {
          resultData = checkGreaterthanEqualto(rule, data);
          break;
        }
        case 'contains': {
          resultData = checkContains(rule, data);
          break;
        }
        default:
          break;
      }

      res.send(resultData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
