const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  // if data.field is blank, it will not be an empty string, it will be an empty object so our global isEmpty function checks if its empty and return as empty string
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status.toString() : '';
  data.skills = !isEmpty(data.skills) ? data.skills.toString() : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle field is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Profile status field is required';
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Profile skills field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Profile website is not a valid URL';
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Profile twitter is not a valid URL';
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Profile facebook is not a valid URL';
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Profile linkedin is not a valid URL';
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Profile youtube is not a valid URL';
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Profile instagram is not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
