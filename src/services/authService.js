import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Reemplaza esto con la URL correcta de tu backend

export default {
    login(username, password) {
        return axios.post(`${API_URL}/login`, { username, password })
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('vueUser', username);
                return token;
            })
            .catch((error) => {
                throw error;
            });
    },

    isAuthenticated() {
        const token = localStorage.getItem('token');
        console.log(!!token);
        return !!token; // Devuelve true si existe un token en el localStorage, de lo contrario, false
    },
};
