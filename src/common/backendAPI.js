import axios from 'axios';

const backendBase = axios.create({
    baseURL: process.env.VUE_APP_API_BASE,
    headers: { 'Content-Type': 'application/json' }
})


export { backendBase }