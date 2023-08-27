import React, { useRef, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../style/blog.css'

const Blog = () => {
    //para obtener el valor de id y para asi enviarlo
    const location = useLocation();
    const parts = location.pathname.split('/')
    const id = parts[parts.length - 1]
    
    const commetRef = useRef();
    const [ blogObt, setBlogObt ] = useState([])

    const commet = () => {
        // para ir hasta el final hasta el comentario
        commetRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log('Form commet');
    };

    console.log(blogObt[0]?.title)

    useEffect(()=>{
        axios.get(`http://localhost:3000/blog/${id}`)
            .then((response) => {
                setBlogObt(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error al obtener los datos de blog ', error)
            })
    }, [])

    return (
        <>
            <div className='blog-body'>
                <Sidebar commet={commet} />
                <article className='blog-items'>
                    {
                        blogObt.map((blog) => (
                            <div key={blog.blog_id}>
                                <h2>{blog.title}</h2>
                                <p>{blog.body}</p>
                            </div>
                        ))
                    }
                </article>
            </div>
            <div  ref={commetRef}>
                <FormComment titleComm={blogObt[0]?.title} />
            </div>
        </>
    );
};

const FormComment = ({ titleComm }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post('http://127.0.0.1:3000/comment', {
                title_blog: titleComm,
                comment_blog: data.comment_blog,
            })
            .then((response) => {
                //para limpiar los inputs
                reset()
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Comentario</label>
            <input {...register('comment_blog', { required: true })} />
            <button type="submit">Comentar</button>
        </form>
    );
};

export default Blog;
