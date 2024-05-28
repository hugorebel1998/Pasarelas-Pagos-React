import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Register />} />
        </Routes>
    )
}
