import React,{ useContext} from 'react'
import { AuthContext } from '../auth/AuthContext'
import Navbar from './Navbar'
import SmallBlog from './SmallBlog'

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