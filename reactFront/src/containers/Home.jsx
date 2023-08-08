import React,{ useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'

const Home = () => {
    const { login, logout } = useContext(AuthContext)
    return (
        <div>Home
            <button onClick={login}>LOGEO</button>
            <button onClick={logout}>DESLOGEO</button>
        </div>
    )
}

export default Home