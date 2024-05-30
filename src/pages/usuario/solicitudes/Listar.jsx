
export const Listar = ({ solicitudes, onOpenModalEdit, onOpenModalPagar }) => {

    const handleEditSolicitud = (solicitud) => {
        onOpenModalEdit(solicitud);
    }

    const handlePaySolicitud = (solicitud) => {
        onOpenModalPagar(solicitud)
    }

    return (
        < div className="table-responsive" >
            <table className="table table table-hover table-transparent">
                <thead className="table-primary bg-transparent">
                    <tr>
                        <th scope="col">#</th>
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
                        solicitudes.map((solicitud, key) => (
                            <tr key={solicitud.id}>
                                <td>{key + 1}</td>
                                <td>{solicitud.nombre} {solicitud.apellidos}</td>
                                <td>{solicitud.email}</td>
                                <td>{solicitud.monto_a_pagar}</td>
                                <td>{solicitud.estatus}</td>
                                <td>{solicitud.created_at}</td>
                                <td>
                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-cogs" />
                                                Acciones
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <button onClick={() => handleEditSolicitud(solicitud)} className="dropdown-item">
                                                        <i className="fa fa-edit" />
                                                        Editar solicitud
                                                    </button>
                                                </li>

                                                <li>
                                                    <button onClick={() => handlePaySolicitud(solicitud)} className="dropdown-item">
                                                        <i className="fas fa-credit-card" />
                                                        Realizar pago
                                                    </button>
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

    )
}
