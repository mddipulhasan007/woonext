import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://posadmin.expertoftech.com/wp-json/wc/v3/',
    headers: { 'Content-Type': 'application/json' },
    auth: {
        username: 'ck_35d084fdacad0783709df8bfd4e723c3a6506c02',
        password: 'cs_d633a9ca4841f75710688eaf44247534811f18ec',
    },
});

export default axiosInstance;
