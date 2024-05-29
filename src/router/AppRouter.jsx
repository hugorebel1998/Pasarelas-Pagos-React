import { Route, Routes } from "react-router-dom"
import { Login, Register } from "@/pages/auth"
import { Home, SolicitudesListar } from "@/pages/usuario"
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
                <Route path="home" element={<Home />} />
                <Route path="solicitudes" element={<SolicitudesListar />} />
            </Route>

        </Routes>
    )
}
