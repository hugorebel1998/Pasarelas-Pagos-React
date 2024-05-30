import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { solicitudesSlice } from './solicitudes'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        solicitudes: solicitudesSlice.reducer,
    },
})