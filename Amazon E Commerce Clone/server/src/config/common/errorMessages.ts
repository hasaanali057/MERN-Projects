// Method to store neccesaary http responce messages

export const enum ResponseMessages {
  LOGIN_SUCCESS = 'Login Successfuly',
  REGISTER_SUCCESS = 'SignUp Successfuly',
  INVALID_CREDENTIALS = 'Invalid Credentials',
  EMAIL_IN_USE = 'Email already in use',
  USER_NOT_FOUND = 'User not found',
  UPDATED = 'Updated successfully',
  RESET_LINK_SET = 'Password reset link sent to your email',
  SOMETHING_WENT_WRONG = 'Something went wrong',
  ALREADY_EXSISTS = 'Another resource already exists with the same attributes',
  UNAUTHORIZED = 'You are not authorized to access this data',
  SERVER_ERROR = 'Server Error',
  EMAIL_EMPTY = 'Email Empty',
  SUCCESS = 'Successful',
  NOT_SUCCESS = 'Unsuccessfull',
  NOT_FOUND = 'Not Found',
  BAD_REQUEST = 'Bad Request',
  PRODUCTADDED = 'Product Added'
}