import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
    
    return (
        <>
            <Navbar/>
            <div className='max-w-screen overflow-x-hidden' >
                <Outlet />
            </div>
        </>
    )
}

export default Home