import { createSlice } from '@reduxjs/toolkit';

export const pagosSlice = createSlice({
    name: 'pagos',
    initialState: {
        loading: false,
        pagos: [],
        mensajeExito: null
    },
    reducers: {
        isChecking: (state) => {
            state.loading = true;
            state.mensajeExito = null;
        },
        listar: (state, { payload }) => {
            state.pagos = payload.response;
            state.loading = false;
            state.mensajeExito = '';
        },
        crear: (state, { payload }) => {
            state.pagos.unshift(payload.response);
            state.loading = false;
            state.mensajeExito = 'Procesando pago.';
        },

    }
});


// Action creators are generated for each case reducer function
export const { isChecking, listar, crear } = pagosSlice.actions;