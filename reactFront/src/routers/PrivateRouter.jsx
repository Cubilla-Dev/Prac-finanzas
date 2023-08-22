import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/auth/AuthContext'


export const PrivateRouter = ({ children }) => {
    const {logged} = useContext(AuthContext)
    console.log(!!logged)
    return (logged) ?
        children
        : <Navigate to='/login' />
}
