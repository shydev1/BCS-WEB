import axios from 'axios';

const client = axios.create({ baseURL: 'https://bcs-update-api.vercel.app/api' })

export default client;