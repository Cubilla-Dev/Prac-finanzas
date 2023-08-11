import React,{ useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'
import Navbar from './Navbar'
import SmallBlog from './SmallBlog'

let titu = 'Como mejorar tus finanzas'
let arra = ['mejora', 'fiananzas', 'personal']

const Home = () => {
    const { login, logout } = useContext(AuthContext)
    return (
        <>
            {/* // <div>Home
            //     <button onClick={login}>LOGEO</button>
            //     <button onClick={logout}>DESLOGEO</button>
            // </div> */}
            <Navbar/>
            <SmallBlog title={titu} category={arra} />
        </>
    )
}

export default Home