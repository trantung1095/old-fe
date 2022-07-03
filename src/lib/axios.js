import axios from 'axios';

import storage from '@/utils/storage';

const axiosInstance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = storage.getToken();
    if (token) {
        config.headers["x-access-token"] = token
    }
    return config
})