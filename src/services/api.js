import axios from 'axios';

const api = axios.create({
    //rota q não muda
    baseURL: "https://viacep.com.br/ws/"
});

export default api;