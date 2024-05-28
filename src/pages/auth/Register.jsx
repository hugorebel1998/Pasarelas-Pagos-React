import React, { useState } from 'react'
import { PublicLayout } from "@/layouts"
import { Link } from 'react-router-dom'

export const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const [showPasswordTwo, setShowPasswordTwo] = useState(false)

    const onShowPasswordTwo = () => {
        setShowPasswordTwo(!showPasswordTwo);
    }
    return (
        <PublicLayout>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success" />
                        <div className="card-body">
                            <div className="h4 text-center">Crear cuenta</div>
                            <form>
                                <div className="row gy-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" name="nombre" className="form-control" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Apellido paterno</label>
                                        <input type="text" name="paterno" className="form-control" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Apellido materno</label>
                                        <input type="text" name="materno" className="form-control" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Nombre usuario</label>
                                        <input type="text" name="username" className="form-control" />
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Correo electrónico</label>
                                        <input type="email" name='email' className="form-control" />
                                    </div>


                                    <div className="col-md-12">
                                        <label className="form-label">Contraseña</label>
                                        <div className="input-group">
                                            <input type={showPassword ? 'text' : 'password'} className="form-control" />
                                            <button type="button" onClick={onShowPassword} className="input-group-text">
                                                {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Confirmar contraseña</label>
                                        <div className="input-group">
                                            <input type={showPasswordTwo ? 'text' : 'password'} className="form-control" />
                                            <button type="button" onClick={onShowPasswordTwo} className="input-group-text">
                                                {showPasswordTwo ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                                            </button>
                                        </div>
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
