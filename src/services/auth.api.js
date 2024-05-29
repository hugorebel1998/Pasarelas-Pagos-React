import http from "./http"

export default {
    login(payload) {
        return http.post('auth/login', payload);
    },

    registro(payload) {
        return http.post('auth/registrar', payload);
    },

    refrescarToken(token) {
        return http.post('auth/refresh-token', token);
    }
}