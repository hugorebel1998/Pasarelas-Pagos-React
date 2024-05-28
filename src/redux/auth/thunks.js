import { singLogin, singRegister } from "./actions";
import { isChekingCredentials, login, logout, registro } from "./authSlice"

export const startLogin = (data) => {

    return async (dispatch) => {

        dispatch(isChekingCredentials());

        const response = await singLogin(data);

        if (!response.ok)
            return dispatch(logout());

        dispatch(login(response))
    }
}

export const startRegister = (data) => {

    return async (dispatch) => {
        dispatch(isChekingCredentials());

        const response = await singRegister(data);

        if (!response.ok)
            return dispatch(logout());

        dispatch(registro(response));

    }
}