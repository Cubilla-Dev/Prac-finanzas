import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/smallBlog.css'


const SmallBlog = () => {
    const [ blog, setBlog ] = useState([])
    const navigate = useNavigate()

    const refirecttoBlog = (id) =>{
        navigate(`/blog/${id}`)
    }

    useEffect(() => {
        axios.get('http://localhost:3000/smallblog') 
            .then((response) => {
                setBlog(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error al recibir los datos de SmallBlog: ', error);
            });
    }, []);

    return (
        <div className='blog-list'>
            {blog.map((blog, index) => (
                <article
                key={index}
                className='blog-item' 
                onClick={() => refirecttoBlog(blog.blog_id)}
                >
                <h2>{blog.title}</h2>
                <span>{/* Agrega aquí el contenido del span */}</span>
                </article>
            ))}
        </div>
    );

}

export default SmallBlog