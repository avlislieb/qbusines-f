import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://teste.com.br/api/v1/' ,
});

export default api;
