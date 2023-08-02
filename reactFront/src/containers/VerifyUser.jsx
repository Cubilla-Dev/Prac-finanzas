import React, { useContext } from 'react'
import { Navigate } from 'react-router'


export const VerifyUser = ({ children }) => {
    // const  logged  = useContext(AuthContext)
    const  logged  = localStorage.getItem('token')
    return (logged) ?
        children
        : <Navigate to='/login' />
}


