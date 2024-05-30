import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import catalogoApi from '@/services/catalogos.api';
import { Spiner } from '@/components/Spiner'
import { useDispatch, useSelector } from "react-redux";
import { startActualizar, startCrear, startListar } from "@/redux/solicitudes";
import Swal from "sweetalert2";

export const Modal = ({ openModal, closedModal, solicitudEdit }) => {



  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({ mode: 'all' })

  const dispatch = useDispatch();
  const { loading} = useSelector((state) => state.solicitudes);

  useEffect(() => {
    if (solicitudEdit !== null && solicitudEdit !== undefined) {
      console.log({ solicitudEdit });
      Object.keys(solicitudEdit).forEach((key) => {
        setValue(key, solicitudEdit[key]);
      });
    } else {
      reset();
    }
  }, [solicitudEdit]);


  const [paises, setPaises] = useState([]);
  const [programas, setProgramas] = useState([]);

  const loadPaises = async () => {
    const response = await catalogoApi.codigo('paises');
    const { opciones } = response;
    setPaises(opciones);
  }

  const loadProgramas = async () => {
    const response = await catalogoApi.codigo('programas');
    const { opciones } = response;
    setProgramas(opciones);
  }

  useEffect(() => {

    loadPaises();

    loadProgramas();

  }, [])


  const onSubmit = async (data) => {
    if (!solicitudEdit) {
      dispatch(startCrear(data))
      reset();
      Swal.fire({ title: 'Éxito', text: 'Solicitud creada con éxito.', icon: "success" });
      closedModal();
    } else {
      dispatch(startListar());
      dispatch(startActualizar(solicitudEdit.id, data))
      reset();
      Swal.fire({ title: 'Éxito', text: 'Solicitud ctualizada con éxito.', icon: "info" });
      closedModal();
    }
  }

  if (!openModal) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop show" />
      <div className="modal show d-block" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{solicitudEdit ? 'Actualizar solicitud' : 'Crear solicitud'}</h5>
              <button type="button" className="btn-close" onClick={closedModal}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {loading ? <Spiner /> : ''}
                <div className="row gy-3">
                  <div className="col-md-4">
                    <label className="form-label">Nombre(s)</label>
                    <input
                      type="text"
                      name="nombre"
                      autoComplete="off"
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                      {...register("nombre", { required: 'El campo nombre es requerido.' })}
                    />
                    {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Apellidos</label>
                    <input
                      type="text"
                      name="apellidos"
                      autoComplete="off"
                      className={`form-control ${errors.apellidos ? 'is-invalid' : ''}`}
                      {...register("apellidos", { required: 'El campo apellidos es requerido.' })}
                    />
                    {errors.apellidos && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.apellidos.message}</span>}
                  </div>


                  <div className="col-md-4">
                    <label className="form-label">Fecha nacimiento</label>
                    <input
                      type="date"
                      name="fecha_nacimiento"
                      autoComplete="off"
                      className={`form-control ${errors.fecha_nacimiento ? 'is-invalid' : ''}`}
                      {...register("fecha_nacimiento", { required: 'El campo fecha nacimiento es requerido.' })}
                    />
                    {errors.fecha_nacimiento && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.fecha_nacimiento.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Año escolar</label>
                    <input
                      type="number"
                      name="anio_escolar"
                      autoComplete="off"
                      className={`form-control ${errors.anio_escolar ? 'is-invalid' : ''}`}
                      {...register("anio_escolar", { required: 'El campo año escolar es requerido.' })}
                    />
                    {errors.anio_escolar && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.anio_escolar.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Nombre(s) tutor</label>
                    <input
                      type="text"
                      name="nombre_tutor"
                      autoComplete="off"
                      className={`form-control ${errors.nombre_tutor ? 'is-invalid' : ''}`}
                      {...register("nombre_tutor", { required: 'El campo nombre tutor es requerido.' })}
                    />
                    {errors.nombre_tutor && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre_tutor.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Apellido(s) tutor</label>
                    <input
                      type="text"
                      name="apellidos_tutor"
                      autoComplete="off"
                      className={`form-control ${errors.apellidos_tutor ? 'is-invalid' : ''}`}
                      {...register("apellidos_tutor", { required: 'El campo apellidos tutor es requerido.' })}
                    />
                    {errors.apellidos_tutor && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.apellidos_tutor.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Parentesco</label>
                    <select
                      name="parentesco"
                      className={`form-select ${errors.parentesco ? 'is-invalid' : ''}`}
                      {...register("parentesco", { required: 'El campo patensco es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      <option value="Padre">Padre</option>
                      <option value="Madre">Madre</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.parentesco && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.parentesco.message}</span>}
                  </div>


                  <div className="col-md-4">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      {...register("email", { required: 'El campo correo electrónico es requerido.' })}
                    />
                    {errors.email && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.email.message}</span>}
                  </div>


                  <div className="col-md-4">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="number"
                      name="telefono"
                      autoComplete="off"
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      {...register("telefono",
                        {
                          required: 'El campo telefono es requerido.',
                          maxLength: { value: 10, message: 'El teléfono no puede tener más de 10 caracteres.' }
                        })}
                    />
                    {errors.telefono && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.telefono.message}</span>}
                  </div>


                  <div className="col-md-4">
                    <label className="form-label">Nombre colegio</label>
                    <input
                      type="text"
                      name="nombre_colegio"
                      autoComplete="off"
                      className={`form-control ${errors.nombre_colegio ? 'is-invalid' : ''}`}
                      {...register("nombre_colegio", { required: 'El campo nombre colegio es requerido.' })}
                    />
                    {errors.nombre_colegio && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre_colegio.message}</span>}
                  </div>



                  <div className="col-md-4">
                    <label className="form-label">Monto a pagar</label>
                    <input
                      type="number"
                      name="monto_a_pagar"
                      autoComplete="off"
                      className={`form-control ${errors.monto_a_pagar ? 'is-invalid' : ''}`}
                      {...register("monto_a_pagar", { required: 'El campo monto a pagar es requerido.' })}
                    />
                    {errors.monto_a_pagar && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.monto_a_pagar.message}</span>}
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Ciclo viaje clave</label>
                    <input
                      type="number"
                      name="ciclo_viaje_clave"
                      autoComplete="off"
                      className={`form-control ${errors.ciclo_viaje_clave ? 'is-invalid' : ''}`}
                      {...register("ciclo_viaje_clave", { required: 'El campo ciclo viaje clave es requerido.' })}
                    />
                    {errors.ciclo_viaje_clave && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.ciclo_viaje_clave.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Pais</label>
                    <select
                      name="pais_clave"
                      className={`form-select ${errors.pais_clave ? 'is-invalid' : ''}`}
                      {...register("pais_clave", { required: 'El campo pais es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      {
                        paises.map((pais) => (
                          <option key={pais.id} value={solicitudEdit ? solicitudEdit.pais_clave : pais.nombre}> {pais.nombre}</option>
                        ))
                      }
                    </select>
                    {errors.pais_clave && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.pais_clave.message}</span>}

                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tipo programa </label>
                    <select
                      name="programa_clave"
                      className={`form-select ${errors.programa_clave ? 'is-invalid' : ''}`}
                      {...register("programa_clave", { required: 'El campo programa es requerido.' })}
                      defaultValue=""
                    >
                      <option value=''>--Selecciona una opcion--</option>
                      {
                        programas.map((programa) => (
                          <option key={programa.id} value={solicitudEdit ? solicitudEdit.programa_clave : programa.nombre}> {programa.nombre}</option>
                        ))
                      }

                    </select>
                    {errors.programa_clave && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.programa_clave.message}</span>}
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Referencia de pago</label>
                    <textarea
                      type="text"
                      name="referencia_pago"
                      autoComplete="off"
                      rows="3"
                      className={`form-control ${errors.referencia_pago ? 'is-invalid' : ''}`}
                      {...register("referencia_pago", { required: 'El campo referencia pago es requerido.' })}
                    />
                    {errors.referencia_pago && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.referencia_pago.message}</span>}
                  </div>

                </div>
                <div className="text-end mt-4">
                  <button type="button" className="btn btn-danger mx-3" onClick={closedModal}>Cerrer</button>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
