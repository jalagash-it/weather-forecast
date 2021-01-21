import axios from 'axios';

const instance = axios.create({
    baseURL: 'api/',
    headers: { 'Content-Type': 'application/json' }
});
instance.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    if (token)
        config.headers.token = token;
    return config;
});
instance.interceptors.response.use(function(res) {
    console.log(res);
    return res;
}, function(error) {
    console.log(error);
    return Promise.reject(error);
});
export default instance;