import axios from 'axios';

const token = localStorage.getItem('token');
const http = axios.create({
  baseURL: `${process.env.API_URL}/api/v1`,
  headers: {
    authorization: token || localStorage.token || ''
  }
});

export { http };
