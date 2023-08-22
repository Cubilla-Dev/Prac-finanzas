import React, { useState, useContext, useEffect } from 'react'
import {Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/auth/AuthContext'
import '../style/navbar.css'

const Navbar = () => {
    const { logout, logged } = useContext(AuthContext)
    const [regis, setRegis] = useState(false)
    const location = useLocation()
    const currentPath = location.pathname
    //si esta en register no se mostrara los botones de login y register
    useEffect(() =>{
        if(currentPath === '/register'){
            setRegis(true)
        }
    }, [currentPath])

    return (
        <header>
            <nav>
                {/* aca tiene que estar una imagen del logo */}
                <div className="logo">
                {/* Agrega aquí la imagen de tu logo */}
                </div>
                <div  className="nav-links">
                    <NavLink to='/formblog'>formulario del blog</NavLink>
                    <NavLink to='blog'>blog</NavLink>
                    <NavLink to=''>Presupuesto 3</NavLink>

                    {
                        regis 
                        ? null
                        :   <div className="auth-buttons">
                                { !logged ? 
                                    <Link to="/login">
                                        <button>Iniciar sesión</button>
                                    </Link>
                                    : <button onClick={() => logout()}>Cerrar sesion</button>}
                                { !logged ? 
                                    <Link to="/register">
                                        <button>Registrarse</button>
                                    </Link> 
                                    : null}
                            </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar