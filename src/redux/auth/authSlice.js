import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        estatus: 'no-autenticado',
        access_token: null,
        user: null,
    },
    reducers: {
        isChekingCredentials: (state) => {
            state.estatus = 'es-espera';
        },

        login: (state, { payload }) => {
            state.estatus = 'autenticado';
            state.access_token = payload.access_token;
            state.user = payload.user;
        },

        registro: (state, { payload }) => {
            state.estatus = 'autenticado';
            state.user = payload.user;
        },

        logout: (state) => {
            state.estatus = 'no-autenticado';
            state.access_token = null;
            state.user = null;
        }
    }
});

export const { isChekingCredentials, login, registro, logout } = authSlice.actions;
