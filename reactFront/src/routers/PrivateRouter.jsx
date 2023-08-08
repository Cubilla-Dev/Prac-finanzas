import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/AuthContext'


export const PrivateRouter = ({ children }) => {
    const {logged} = useContext(AuthContext)
    //logged ? console.log('es verdadero') : console.log('es falso')
    //const  logged  = localStorage.getItem('token')
    console.log(!!logged)
    return (logged) ?
        children
        : <Navigate to='/login' />
}
