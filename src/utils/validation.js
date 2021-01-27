const {
  buildSuccessResponse,
  buildFailureResponse,
} = require('./buildResponse');

const checkEquality = (rule, data) => {
  if (data[rule.field] === rule.condition_value) {
    return buildSuccessResponse(rule, data, 'eq');
  }

  return buildFailureResponse(rule, data, 'eq');
};

const checkInEquality = (rule, data) => {
  if (data[rule.field] !== rule.condition_value) {
    return buildSuccessResponse(rule, data, 'neq');
  }

  return buildFailureResponse(rule, data, 'neq');
};

const checkGreaterthan = (rule, data) => {
  if (data[rule.field] > rule.condition_value) {
    return buildSuccessResponse(rule, data, 'gt');
  }

  return buildFailureResponse(rule, data, 'gt');
};

const checkGreaterthanEqualto = (rule, data) => {
  if (data[rule.field] >= rule.condition_value) {
    return buildSuccessResponse(rule, data, 'gte');
  }

  return buildFailureResponse(rule, data, 'gte');
};

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
