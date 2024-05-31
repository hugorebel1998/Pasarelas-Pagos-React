import { select } from "./actions";
import { isChecking, listar } from "./usuariosSlice";

export const startListar = () => {
    return async (dispatch) => {

        dispatch(isChecking());

        const response = await select();

        if (!response.ok)
            return

        dispatch(listar(response))
    }
}