import { select, create } from './actions';
import { crear, isChecking, listar } from './pagosSlice';

export const startListar = (solicitud_id) => {
    return async (dispatch) => {

        dispatch(isChecking());

        const response = await select(solicitud_id);

        if (!response.ok)
            return

        dispatch(listar(response))
    }
}

export const startCrear = (solicitud_id, data) => {
    return async (dispatch) => {
        dispatch(isChecking());

        const response = await create(solicitud_id, data)

        const { link_pago } = response.response

        if (!response.ok)
            return

        dispatch(crear(response));


        return link_pago;

        // if (link_pago)
        //     window.open(link_pago)

    }
}