/* eslint-disable consistent-return */
/**
 * @method checkRequiredFields - check if required fields are present
 *
 * @param  {} req - request object
 * @param  {} res - response object
 * @param  {} next - move to the next middleware|function
 *
 *  @returns {Object} err|next()
 */
const checkRequiredFields = (req, res, next) => {
  const requiredFields = ['data', 'rule'];
  const requestFields = Object.keys(req.body);

  try {
    requiredFields.forEach((field) => {
      if (!requestFields.includes(field)) {
        return res.status(400).send({
          message: `${field} is required.`,
          status: 'error',
          data: null,
        });
      }
    });

    requestFields.forEach((field) => {
      if (!requiredFields.includes(field)) {
        return res.status(400).send({
          message: 'Invalid JSON payload passed.',
          status: 'error',
          data: null,
        });
      }
    });

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  checkRequiredFields,
};
