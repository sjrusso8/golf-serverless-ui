import axios from 'axios';
// import { store } from '../store/index.js'
// import * as types from "@/store/modules/auth/mutation-types";

const backendBase = axios.create({
    baseURL: process.env.VUE_APP_API_BASE,
    headers: { contentType: 'application/json' }
})

export { backendBase }