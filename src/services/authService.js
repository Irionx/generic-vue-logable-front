import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Reemplaza esto con la URL correcta de tu backend

export default {
    // Método para iniciar sesión
    login(username, password) {
        return axios.post(`${API_URL}/login`, { username, password })
            .then((response) => {
                // Manejar la respuesta del servidor aquí
                console.log('llega respuesta');
                return response.data; // Por ejemplo, puedes devolver el token de autenticación
            })
            .catch((error) => {
                // Manejar errores aquí
                console.log('errorrrrrrr');
                throw error;
            });
    },
};
