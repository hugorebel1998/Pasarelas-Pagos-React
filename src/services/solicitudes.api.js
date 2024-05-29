import http from "./http";

export default {
    listar() {
        return http.get('solicitudes');
    },

    mostrar(solicitud_id) {
        return http.get(`solicitudes/${solicitud_id}`);
    },

    crear(payload) {
        return http.post('solicitudes', payload);
    },

    actualizar(solicitud_id, payload) {
        return http.put(`solicitudes/${solicitud_id}`, payload);
    }
}