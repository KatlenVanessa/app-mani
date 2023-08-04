import axios from 'axios';

const client = axios.create({ baseURL: "http://10.114.64.21:4848/api" });

export default client;