const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000'

const urls = {
  auth: '/auth',
  admin: '/admin',
  rooms: '/rooms',
  users: '/users',
  bookings: '/bookings'
}

export { baseURL, urls }
