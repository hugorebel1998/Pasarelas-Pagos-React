import { createSlice } from '@reduxjs/toolkit';

export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: {
        pagos: [],
        loading: false
    },
    reducers: {
        isChecking: (state) => {
            state.loading = true;
        },

        listar: (state, { payload }) => {
            state.pagos = payload.response
            state.loading = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { isChecking, listar } = usuariosSlice.actions;