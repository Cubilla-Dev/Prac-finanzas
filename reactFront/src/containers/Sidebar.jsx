import React, {useState, useEffect} from 'react'
import '../style/Sidebar.css'
import axios from 'axios'

const Sidebar = ({amoBookmark, commet}) => {
    //para cambiar si ya lo guardaste  no
    const [saveSidebar, setSaveSidebar] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/getSidebar`)
            .then((response) => {
                console.log('Data obtenida Sidebar',response.data)
                setSaveSidebar(response.data)
            })
            .catch((error)=>{
                console.error('Error al obtener data de Sidebar ', error)
            })
    })

    // const updateSidebarStatus = (value) => {
    //     const updateStatus = !saveSidebar[0]?.value //cambiar el estado actual
    //     axios.put(`http://localhost:3000/upSidebar/${id}`, {`${value}`: updateStatus}) //pasar la id del usuario que le dio like para guardar en la db
    //         .then((response) => {
    //             setSaveSidebar()
    //         })
    //         .catch((error)=>{
    //             console.error('Error al actualizar data de Sidebar ', error)
    //         })
    // }


    return (
        <div className='body-items'>
            <div className='cont-items'>
                <div className='like' onClick={() => updateSidebarStatus(like)}>
                    {
                        //falta reparar eso
                        saveSidebar[0]?.like
                            ? <img src='/img/favorite_black.svg' alt="favorite_black" />
                            : <img src='/img/favorite.svg' alt="favorite" />
                    }
                </div>
                <div className='commet' onClick={commet}>
                    <img src='/img/chat_bubble.svg' alt="chat_bubble" />
                </div>
                <div className='bookmark'  onClick={() => updateSidebarStatus(bookmark)}>
                    {
                        //falta reparar eso
                        saveSidebar[0]?.bookmark 
                            ? <img src='/img/turned.svg' alt="Bookmark" />
                            : <img src='/img/bookmark.svg' alt="Bookmark" />
                    }
                    <p>{amoBookmark}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar