const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000'

const urls = {
  auth: '/auth',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password'
}

export { baseURL, urls }
