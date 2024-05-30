import solicitudApi from '@/services/solicitudes.api'

export const select = async () => {
    try {
        const response = await solicitudApi.listar();

        return {
            ok: true,
            response
        }

    } catch (error) {
        return {
            ok: false,
            error
        }
    }
}

export const create = async (data) => {

    try {
        const response = await solicitudApi.crear(data);

        return {
            ok: true,
            response
        }
    } catch (error) {
        return {
            ok: false,
            response
        }
    }
}

export const update = async (solicitud_id, data) => {
    try {
        const response = await solicitudApi.actualizar(solicitud_id, data);

        return {
            ok: true,
            response
        }
    } catch (error) {
        return {
            ok: false,
            response
        }
    }
}