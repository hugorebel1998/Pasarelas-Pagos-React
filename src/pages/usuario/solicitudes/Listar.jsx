import { PrivateLayout } from "@/layouts/PrivateLayout"
import solicitudApi from "@/services/solicitudes.api";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Spiner } from '@/components/Spiner';

export const SolicitudesListar = () => {


    const [solicitudes, setSolicitudes] = useState([]);
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [solicitudEditando, setSolicitudEditando] = useState(null);


    const loadSolicitudes = async () => {
        setLoading(true);
        try {
            const response = await solicitudApi.listar();
            setSolicitudes(response);
        } finally {
            setLoading(false);
        }
    }

    const openModal = () => {
        setSolicitudEditando(null)
        setModal(true)
    }

    const openModalEdit = (solcitud) => {
        setSolicitudEditando(solcitud)
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)

    }

    useEffect(() => {
        loadSolicitudes()
    }, [])


    return (
        <PrivateLayout>

            {loading ? <Spiner /> :

                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="text-start">
                            <button onClick={loadSolicitudes} className="btn btn-outline-success mb-3 mx-2">Actualizar</button>
                            <button onClick={openModal} className="btn btn-outline-primary mb-3">Nueva solcitud</button>

                            <Modal opModal={modal} clModal={closeModal} solicitudEditando={solicitudEditando} refreshSolicitudes={loadSolicitudes} />
                        </div>
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table table-striped table-hover">
                                        <thead className="table-primary">
                                            <tr>
                                                <th scope="col">Nombre completo</th>
                                                <th scope="col">Correo electrónico</th>
                                                <th scope="col">Monto a pagar</th>
                                                <th scope="col">Estatus</th>
                                                <th scope="col">Fecha creacion</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                solicitudes.map((solicitud) => (
                                                    <tr key={solicitud.id}>
                                                        <td>{solicitud.nombre} {solicitud.apellidos}</td>
                                                        <td>{solicitud.email}</td>
                                                        <td>{solicitud.monto_a_pagar}</td>
                                                        <td>{solicitud.estatus}</td>
                                                        <td>{solicitud.created_at}</td>
                                                        <td>
                                                            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                                                <div className="btn-group" role="group">
                                                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Acciones
                                                                    </button>
                                                                    <ul className="dropdown-menu">
                                                                        <li>
                                                                            <button onClick={() => openModalEdit(solicitud)} className="dropdown-item">Editar solicitud </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </PrivateLayout>
    )
}
