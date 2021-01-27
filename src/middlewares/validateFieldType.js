/* eslint-disable consistent-return */
/**
 * @method validateFieldType - validate the field type
 *
 * @param  {} req - request object
 * @param  {} res - response object
 * @param  {} next - move to the next middleware|function
 *
 * @returns {Object} err|next()
 */
const validateFieldType = (req, res, next) => {
  const { rule, data } = req.body;

  const ruleObj = JSON.stringify(rule);

  try {
    const parsedRule = JSON.parse(ruleObj);
    const ruleType = Object.prototype.toString.call(parsedRule);

    const isRuleValidObject = ruleType === '[object Object]';

    if (!isRuleValidObject) {
      return res.status(400).send({
        message: 'rule should be a|an Object.',
        status: 'error',
        data: null,
      });
    }

    const dataType = Object.prototype.toString.call(data);
    const validParams = [
      '[object Object]',
      '[object Array]',
      '[object String]',
    ];

    if (!validParams.includes(dataType)) {
      return res.status(400).send({
        message: 'data should be a|an Object, String or Array.',
        status: 'error',
        data: null,
      });
    }

    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  validateFieldType,
};
