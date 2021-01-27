/* eslint-disable consistent-return */

/**
 * @method validateRuleObject - validates the [rule] object passed to the endpoint
 *
 * @param  {Object} req - request object
 * @param  {Object} res - response object
 * @param  {Object} next - move to the next middleware|function
 *
 * @returns {Object} - error|next()
 */
const validateRuleObject = (req, res, next) => {
  const { rule } = req.body;

  const requiredFields = ['field', 'condition', 'condition_value'];

  const acceptedConditionValues = ['eq', 'neq', 'gt', 'gte', 'contains'];

  try {
    const ruleKeys = Object.keys(rule);

    requiredFields.forEach((field) => {
      if (!ruleKeys.includes(field)) {
        return res.status(400).send({
          message: `${field} is required in rule object.`,
          status: 'error',
          data: null,
        });
      }
    });

    if (!acceptedConditionValues.includes(rule.condition)) {
      return res.status(400).send({
        message: `${rule.condition} is not an accepted condition.`,
        status: 'error',
        data: null,
      });
    }

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  validateRuleObject,
};
