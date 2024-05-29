import http from "./http"

export default {

    listar() {
        return http.get('catalogos');
    },

    mostrar(catalogo_id) {
        return http.get(`catalogos/${catalogo_id}`);
    },

    codigo(codigo) {
        return http.get(`catalogos/codigo/${codigo}`);
    }
}