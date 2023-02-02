import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3018',
  //   baseURL: 'https://basic-auth-api.onrender.com',
});
