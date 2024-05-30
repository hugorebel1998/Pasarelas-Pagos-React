import { create, select, update } from "./actions";
import { actualizar, crear, isChecking, listar } from "./solicitudesSlice"

export const startListar = () => {
    return async (dispatch) => {

        dispatch(isChecking());

        const response = await select();

        if (!response.ok)
            return

        dispatch(listar(response))
    }
}

export const startCrear = (data) => {
    return async (dispatch) => {
        dispatch(isChecking());

        const response = await create(data)
        
        console.log(response)
        if (!response.ok)
            return

        dispatch(crear(response));
    }
}

export const startActualizar = (solicitud_id, data) => {

    return async (dispatch) => {
        dispatch(isChecking());

        const response = await update(solicitud_id, data);

        if (!response.ok)
            return

        dispatch(actualizar(response));
    }
}