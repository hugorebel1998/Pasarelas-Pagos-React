import { createSlice } from '@reduxjs/toolkit';

export const solicitudesSlice = createSlice({
    name: 'solicitudes',
    initialState: {
        loading: false,
        estatus: null,
        solicitudes: [],
        error: null,
        mensajeExito: '',
    },
    reducers: {
        isChecking: (state) => {
            state.loading = true;
            state.mensajeExito = '';
        },
        listar: (state, { payload }) => {
            state.solicitudes = payload.response;
            state.loading = false;
            state.error = payload.error
            state.mensajeExito = '';
        },
        crear: (state, { payload }) => {
            state.solicitudes.unshift(payload.response);
            state.loading = false;
            state.error = payload.error;
            state.mensajeExito = 'Nueva solicitud creada con éxito';
        },
        actualizar: (state, { payload }) => {
            state.solicitudes = state.solicitudes.map(solicitud => {
                if (solicitud.id = payload.id) {
                    return payload
                }
                return solicitud
            });
            state.loading = false;
            state.error = payload.error;
            state.mensajeExito = 'Solicitud actualizada con éxito';
        }
    }
});


// Action creators are generated for each case reducer function
export const { isChecking, listar, crear, actualizar } = solicitudesSlice.actions;