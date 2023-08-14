import React, { useState, useContext } from 'react'
import {Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

const Navbar = () => {
    const { logout, logged } = useContext(AuthContext)
    const navigate = useNavigate()

    // const onLogout = () => {
    //     logout()
    //     navigate('/login')
    // }

    return (
        <header>
            <nav>
                <Link to='/'>Inicio</Link>
                <div>
                    <ul>
                        <li>
                            <NavLink to=''>Presupuesto</NavLink>
                        </li>
                        <li>
                            <NavLink to=''>Presupuesto 2</NavLink>
                        </li>
                        <li>
                            <NavLink to=''>Presupuesto 3</NavLink>
                        </li>
                    </ul>
                    <div>
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar