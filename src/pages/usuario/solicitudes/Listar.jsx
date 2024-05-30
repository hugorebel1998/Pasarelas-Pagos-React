
export const Listar = ({ solicitudes, onOpenModalEdit }) => {

    const handleEditSolicitud = (solicitud) => {
        onOpenModalEdit(solicitud);
    }

    return (
        < div className="table-responsive" >
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
                                                    <button onClick={() => handleEditSolicitud(solicitud)} className="dropdown-item">Editar solicitud </button>
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
