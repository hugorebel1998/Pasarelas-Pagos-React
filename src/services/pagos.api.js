import http from "./http"

export default {
    crear(solicitud_id, payload) {
        return http.post(`pagos/${solicitud_id}`, payload);
    }
}