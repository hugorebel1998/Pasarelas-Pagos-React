import http from "./http"

export default {
    listar() {
        return http.get('usuarios/pagos');
    }
}