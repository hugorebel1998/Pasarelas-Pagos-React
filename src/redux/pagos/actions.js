import pagosApi from "@/services/pagos.api"

export const select = async (solicitud_id) => {
    try {
        const response = await pagosApi.listar(solicitud_id);

        return {
            ok: true,
            response
        }
    } catch (error) {
        return {
            ok: true,
            error
        }
    }
}


export const create = async (solicitud_id, data) => {
    try {
        const response = await pagosApi.crear(solicitud_id, data);

        return {
            ok: true,
            response
        }
    } catch (error) {
        return {
            ok: true,
            error
        }
    }
}

