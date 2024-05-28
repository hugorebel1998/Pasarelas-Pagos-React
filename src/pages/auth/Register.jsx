import React, { useState } from 'react'
import { PublicLayout } from "@/layouts"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const [showPasswordTwo, setShowPasswordTwo] = useState(false)

    const onShowPasswordTwo = () => {
        setShowPasswordTwo(!showPasswordTwo);
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        console.log(data)
    }

    return (
        <PublicLayout>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success" />
                        <div className="card-body">
                            <div className="h4 text-center">Crear cuenta</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                            {...register("nombre", { required: 'El campo nombre es requerido.' })}
                                        />
                                        {errors.nombre && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.nombre.message}</span>}

                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Apellido paterno</label>
                                        <input
                                            type="text"
                                            name="paterno"
                                            className={`form-control ${errors.paterno ? 'is-invalid' : ''}`}
                                            {...register("paterno", { required: 'El campo apellido paterno es requerido.' })}
                                        />
                                        {errors.paterno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.paterno.message}</span>}
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Apellido materno</label>
                                        <input
                                            type="text"
                                            name="materno"
                                            className={`form-control ${errors.materno ? 'is-invalid' : ''}`}
                                            {...register("materno", { required: 'El campo apellido materno es requerido.' })}
                                        />
                                        {errors.materno && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.materno.message}</span>}

                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Nombre usuario</label>
                                        <input
                                            type="text"
                                            name="username"
                                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                            {...register("username", { required: 'El campo nombre usuario es requerido.' })}
                                        />
                                        {errors.username && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.username.message}</span>}
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            name='email'
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            {...register("email", { required: 'El campo correo es requerido.' })}
                                        />
                                        {errors.email && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.email.message}</span>}
                                    </div>


                                    <div className="col-md-12">
                                        <label className="form-label">Contraseña</label>
                                        <div className="input-group">
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                {...register("password", { required: 'El campo comtraseña es requerido.' })} />
                                            <button type="button" onClick={onShowPassword} className="input-group-text">
                                                {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                                            </button>
                                        </div>
                                        {errors.password && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.password.message}</span>}
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Confirmar contraseña</label>
                                        <div className="input-group">
                                            <input
                                                type={showPasswordTwo ? 'text' : 'password'}
                                                name="password_confirmation"
                                                className="form-control"
                                                {...register("password_confirmation", {
                                                        validate: {
                                                            value: value => value === watch('password') || 'Las contraseñas no coinciden'
                                                        }
                                                })}
                                            />
                                            <button type="button" onClick={onShowPasswordTwo} className="input-group-text">
                                                {showPasswordTwo ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                                            </button>
                                        </div>
                                        {errors.password_confirmation && <span style={{ fontSize: '12px', margin: '3px' }} className="text-danger">{errors.password_confirmation.message}</span>}
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-outline-success">Crear cuenta</button>
                                </div>

                                <div className="text-end mt-3">
                                    <Link to='/login' style={{ textDecoration: 'none', fontSize: '13px' }}>
                                        Ya tengo una cuenta
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    )
}
