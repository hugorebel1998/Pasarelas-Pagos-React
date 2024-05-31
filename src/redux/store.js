import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { solicitudesSlice } from './solicitudes'
import { pagosSlice } from './pagos'
import { usuariosSlice } from './usuarios'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        solicitudes: solicitudesSlice.reducer,
        pagos: pagosSlice.reducer,
        usuarios: usuariosSlice.reducer,
    },
})