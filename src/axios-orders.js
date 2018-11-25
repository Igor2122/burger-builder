import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-b7a77.firebaseio.com/'
});

export default instance;