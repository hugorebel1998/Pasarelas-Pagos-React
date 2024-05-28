import { PublicLayout } from "@/layouts"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


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
                            <div className="h4 text-center">Inicio sesión</div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-3">
                                    <div className="col-md-12">
                                        <label className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
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
