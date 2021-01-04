import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-34c9d-default-rtdb.firebaseio.com/'
});

export default instance;