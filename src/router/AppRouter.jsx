import { Route, Routes } from "react-router-dom"
import { Login, Register } from "@/pages/auth"
import { Home, Solicitudes } from "@/pages/usuario"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {



    return (
        <Routes>
            <Route element={<PublicRouter />}>
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Register />} />
            </Route>

            <Route path="/*" element={<PrivateRouter />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="solicitudes" element={<Solicitudes />} />
            </Route>

        </Routes>
    )
}
