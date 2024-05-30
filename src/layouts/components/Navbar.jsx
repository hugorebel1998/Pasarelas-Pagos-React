import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { startLogout } from '@/redux/auth/thunks'

export const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(startLogout());

        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-react-blue-trasparente">
            <div className="container">
                <Link to='home' style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>
                    APP
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }} className="nav-link active">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/solicitudes' style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }} className="nav-link">
                                Solicitudes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='home' style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }} className="nav-link">
                                Pagos
                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button onClick={onLogout} className='btn btn-sm btn-primary'>
                            Cerrar sesión
                        </button>
                    </span>
                </div>
            </div>
        </nav>
    )
}
