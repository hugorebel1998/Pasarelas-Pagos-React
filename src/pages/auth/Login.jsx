import { PublicLayout } from "@/layouts"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <PublicLayout>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success" />
                        <div className="card-body">
                            <div className="h4 text-center">Inicio sesión</div>
                            <form>
                                <div className="row gy-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Correo electrónico</label>
                                        <input type="email" className="form-control" />
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
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-outline-success">Iniciar sesión</button>
                                </div>
                                <div className="text-end mt-3">
                                    <Link to='/registro' style={{ textDecoration: 'none', fontSize: '13px' }}>
                                        Crear una nueva cuenta
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
