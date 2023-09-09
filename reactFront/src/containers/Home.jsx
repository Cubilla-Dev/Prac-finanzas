import React,{ useContext} from 'react'
import { AuthContext } from '../context/auth/AuthContext'
import Navbar from './Navbar/Navbar'
import SmallBlog from './SmallBlog/SmallBlog'

let titu = 'Como mejorar tus finanzas'
let arra = ['#mejora', '#fiananzas', '#personal']

const Home = () => {
    
    return (
        <>
            <Navbar/>
            <SmallBlog/>
        </>
    )
}

export default Home