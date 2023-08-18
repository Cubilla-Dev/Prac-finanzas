import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SmallBlog = () => {
    const [ blog, setBlog ] = useState([])
    const navigate = useNavigate()

    const refirecttoBlog = (id) =>{
        navigate(`/blog/${id}`)
        // axios.get(`http://localhost:3000/blog/${id}`)
        //     .catch((error) => {
        //         console.error('Error al enviar la id del blog: ', error);
        //     });
    }

    useEffect(() => {
        axios.get('http://localhost:3000/getSmallBlog') 
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.error('Error al recibir los datos de SmallBlog: ', error);
            });
    }, []);
    
    return (
        <div>
            {
                blog.map((blog, index) => (
                    <article key={index} style={{ 'backgroundColor': 'green', color: 'white' }} onClick={ ()=>refirecttoBlog(blog.blog_id)}>
                        <h2>{blog.title}</h2>
                        <span>{}</span>
                    </article>
                ))
            }
        </div>
    )
}

export default SmallBlog