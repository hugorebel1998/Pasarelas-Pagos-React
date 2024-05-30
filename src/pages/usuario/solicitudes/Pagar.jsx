import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import catalogoApi from "@/services/catalogos.api";

export const Pagar = ({ openModalPagar, closedModalPagar, solicitudPagar }) => {

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({ mode: 'all' })

  const [monedas, setMonedas] = useState([])

  const onLoadCatalogo = async () => {
    const response = await catalogoApi.codigo('divisas');
    const { opciones } = response
    setMonedas(opciones);
  }

  useEffect(() => {

    onLoadCatalogo();

  }, [])


  const onSubmit = (data) => {
    console.log(data)
  }

  if (!openModalPagar)
    return null

  return (
    <>
      <div className="modal-backdrop show" />
      <div className="modal show d-block" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content modal-transparent">
            <div className="modal-header">
              <h5 className="modal-title">Realizar pago</h5>
              <button type="button" className="btn-close" onClick={closedModalPagar}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label className="form-label">Pasarela de pago</label>
                    <select
                      name="pasarela_pago"
                      className={`form-select ${errors.pasarela_pago ? 'is-invalid' : ''}`}
                      {...register("parentesco", { required: 'El campo pasarela pago es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      <option value="paypal">Paypal</option>
                      <option value="stripe">Stripe</option>
                    </select>
                    {errors.pasarela_pago && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.pasarela_pago.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Metodo de pago</label>
                    <select
                      name="metodo_pago"
                      className={`form-select ${errors.pasarela_pago ? 'is-invalid' : ''}`}
                      {...register("metodo_pago", { required: 'El campo metodo pago es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      <option value="credito">Credito</option>
                      <option value="debito">Debito</option>
                    </select>
                    {errors.metodo_pago && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.metodo_pago.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Monto a pagar</label>
                    <input
                      type="text"
                      name="monto_a_pagar"
                      autoComplete="off"
                      className={`form-control ${errors.monto_a_pagar ? 'is-invalid' : ''}`}
                      {...register("monto_a_pagar", { required: 'El campo telefono es requerido.' })}
                    />
                    {errors.monto_a_pagar && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.monto_a_pagar.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tipo moneda </label>
                    <select
                      name="moneda"
                      className={`form-select ${errors.moneda ? 'is-invalid' : ''}`}
                      {...register("moneda", { required: 'El campo moneda es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      {
                        monedas.map((moneda) => (
                          <option key={moneda.id} value={moneda.nombre}> {moneda.nombre}</option>
                        ))
                      }

                    </select>
                    {errors.moneda && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.moneda.message}</span>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Referencia de pago</label>
                    <textarea
                      type="text"
                      name="referencia_de_pago"
                      autoComplete="off"
                      rows="3"
                      className={`form-control ${errors.referencia_de_pago ? 'is-invalid' : ''}`}
                      {...register("referencia_de_pago", { required: 'El campo referencia pago es requerido.' })}
                    />
                    {errors.referencia_de_pago && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.referencia_de_pago.message}</span>}
                  </div>

                </div>

                <div className="text-end mt-4">
                  <button type="button" className="btn btn-danger mx-3" onClick={closedModalPagar}>
                    <i className="fas fa-times mx-1"></i>
                    Cerrar
                  </button>
                  <button type="submit" className="text-white btn btn-info">
                    <i className="fas fa-money-check mx-1" />
                    Procesar pago
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
