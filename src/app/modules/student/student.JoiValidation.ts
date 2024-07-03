import Joi from 'joi'


 const UserNameValidateSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .pattern(/^[A-Z][a-zA-Z]*$/)
      .messages({
          'string.pattern.base': 'First name must start with an uppercase letter and contain only letters',
          'any.required': 'First name is required'
      }),
  middleName: Joi.string(),
  lastName: Joi.string()
      .required()
      .pattern(/^[a-zA-Z]+$/)
      .messages({
          'string.pattern.base': 'Last name must contain only letters',
          'any.required': 'Last name is required'
      })
});

const GuardianValidateSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNumber: Joi.string().required(),
  motherName: Joi.string().required()
});

const studentValidateSchema = Joi.object({
  id: Joi.string().required().messages({
      'any.required': 'Student ID is required'
  }),
  name: UserNameValidateSchema.required().messages({
      'any.required': 'Student name is required'
  }),
  gender: Joi.string()
      .valid('male', 'female')
      .required()
      .messages({
          'any.only': 'Gender must be either "male" or "female"',
          'any.required': 'Gender is required'
      }),
  dateOfBirth: Joi.string().required().messages({
      'any.required': 'Date of birth is required'
  }),
  bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
  permanentAddress: Joi.string().required().messages({
      'any.required': 'Permanent address is required'
  }),
  mailingAddress: Joi.string().required().messages({
      'any.required': 'Mailing address is required'
  }),
  email: Joi.string().email().messages({
      'string.email': 'Email must be a valid email address'
  }),
  contactNumber: Joi.string(),
  emergencyContactNumber: Joi.string(),
  guardian: GuardianValidateSchema.required(),
  profileImg: Joi.string().required(),
  isActive: Joi.string().valid('active', 'blocked').default('active')
});


export default studentValidateSchema ;