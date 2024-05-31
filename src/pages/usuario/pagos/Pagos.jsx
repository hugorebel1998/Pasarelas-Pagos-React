import { PrivateLayout } from "@/layouts/PrivateLayout"
import { useEffect } from "react"
import { Listar } from "./Listar"
import { Spiner } from "@/components/Spiner";
import { useDispatch, useSelector } from "react-redux";
import { startListar } from "@/redux/usuarios";

export const Pagos = () => {

    const { pagos, loading } = useSelector((state) => state.usuarios);
    const dispatch = useDispatch()

    const handleLoadPagos = () => {
        dispatch(startListar())
    }

    useEffect(() => {
        handleLoadPagos();
    }, [])


    return (
        <PrivateLayout>
            {loading ? <Spiner /> : ''}

            <div className="row justify-content-center mt-5">
                <div className="col-md-11">
                    <div className="text-start">
                        <button onClick={handleLoadPagos} className="btn btn-primary mb-3 mx-2">Actualizar</button>
                    </div>
                    <div className="mt-2">
                        <Listar pagos={pagos} />
                    </div>
                </div>
            </div>

        </PrivateLayout>
    )
}
