import { createSlice } from '@reduxjs/toolkit';

export const solicitudesSlice = createSlice({
    name: 'solicitudes',
    initialState: {
        loading: false,
        estatus: null,
        solicitudes: [],
        solicitud: null,
        error: null
    },
    reducers: {
        isChecking: (state) => {
            state.loading = true;
            state.error = null;
        },
        listar: (state, { payload }) => {
            state.solicitudes = payload.response;
            state.loading = false;
            state.error = payload.error
        },
        crear: (state, { payload }) => {
            state.solicitud = payload.response;
            state.loading = false;
            state.error = payload.error
        },
        actualizar: (state, { payload }) => {
            state.solicitud = payload.response;
            state.loading = false;
            state.error = payload.error
        }

    }
});


// Action creators are generated for each case reducer function
export const { isChecking, listar, crear, actualizar } = solicitudesSlice.actions;