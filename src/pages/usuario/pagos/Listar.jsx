import React from 'react'

export const Listar = ({ pagos }) => {
    return (
        < div className="table-responsive" >
            <table className="table table table-hover table-transparent">
                <thead className="table-primary bg-transparent">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Metodo de pago</th>
                        <th scope="col">Identificador orden</th>
                        <th scope="col">Tipo moneda</th>
                        <th scope="col">Monto pagado</th>
                        <th scope="col">Estatus</th>
                        <th scope="col">Fecha creacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pagos.map((pago, key) => (
                            <tr key={pago.id}>
                                <td>{key + 1}</td>
                                <td>{pago.pasarela_pago}</td>
                                <td>{pago.pago_id}</td>
                                <td>{pago.tipo_moneda}</td>
                                <td>{pago.cantidad_pagada}</td>
                                <td>{pago.estatus}</td>
                                <td>{pago.created_at}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
