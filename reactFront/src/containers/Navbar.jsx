import React, { useState, useContext, useEffect } from 'react'
import {Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

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
                    {
                        regis 
                        ? null
                        :   <div>
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