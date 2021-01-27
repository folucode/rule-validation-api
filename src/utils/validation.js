const {
  buildSuccessResponse,
  buildFailureResponse,
} = require('./buildResponse');

/**
 * @method checkEquality - checks for equality between 2 parameters
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 *
 * @returns {Object}
 */
const checkEquality = (rule, data) => {
  if (data[rule.field] === rule.condition_value) {
    return buildSuccessResponse(rule, data, 'eq');
  }

  return buildFailureResponse(rule, data, 'eq');
};

/**
 * @method checkInEquality - checks for inequality between 2 parameters
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 *
 * @returns {Object}
 */
const checkInEquality = (rule, data) => {
  if (data[rule.field] !== rule.condition_value) {
    return buildSuccessResponse(rule, data, 'neq');
  }

  return buildFailureResponse(rule, data, 'neq');
};

/**
 * @method checkGreaterthan - checks if a parameter is greater than the other
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 *
 * @returns {Object}
 */
const checkGreaterthan = (rule, data) => {
  if (data[rule.field] > rule.condition_value) {
    return buildSuccessResponse(rule, data, 'gt');
  }

  return buildFailureResponse(rule, data, 'gt');
};

/**
 * @method checkGreaterthanEqualto - checks if a parameter is greater than or equalto the other
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 *
 * @returns {Object}
 */
const checkGreaterthanEqualto = (rule, data) => {
  if (data[rule.field] >= rule.condition_value) {
    return buildSuccessResponse(rule, data, 'gte');
  }

  return buildFailureResponse(rule, data, 'gte');
};

/**
 * @method checkContains - checks if a parameter contains the other
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 *
 * @returns {Object}
 */
const checkContains = (rule, data) => {
  if (data[rule.field].toString().includes(rule.condition_value)) {
    return buildSuccessResponse(rule, data, 'contains');
  }

  return buildFailureResponse(rule, data, 'contains');
};

module.exports = {
  checkEquality,
  checkInEquality,
  checkGreaterthan,
  checkGreaterthanEqualto,
  checkContains,
};
