/**
 * @method buildSuccessResponse - build success response object
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 * @param  {String} condition
 *
 * @returns {Object} - success response object
 */
const buildSuccessResponse = (rule, data, condition) => ({
  message: `field ${rule.field} successfully validated.`,
  status: 'success',
  data: {
    validation: {
      error: false,
      field: `${rule.field}`,
      field_value: `${data[rule.field]}`,
      condition: `${condition}`,
      condition_value: `${rule.condition_value}`,
    },
  },
});

/**
 * @method buildFailureResponse - build failure response object
 *
 * @param  {Object} rule
 * @param  {Object|String|Array} data
 * @param  {String} condition
 *
 * @returns {Object} - failure response object
 */
const buildFailureResponse = (rule, data, condition) => ({
  message: `field ${rule.field} failed validation.`,
  status: 'error',
  data: {
    validation: {
      error: true,
      field: `${rule.field}`,
      field_value: `${data[rule.field]}`,
      condition: `${condition}`,
      condition_value: `${rule.condition_value}`,
    },
  },
});

module.exports = {
  buildSuccessResponse,
  buildFailureResponse,
};
