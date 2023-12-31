
import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/auth/AuthContext'

export const PublicRouter = ({ children }) => {
    const { logged } = useContext(AuthContext)
    return (!logged) ?
        children
        : <Navigate to="/" />
}