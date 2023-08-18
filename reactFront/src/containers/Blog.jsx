import React, { useRef, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Blog = ({titleBlog, body}) => {
    const location = useLocation();
    const parts = location.pathname.split('/')
    const id = parts[parts.length - 1]
    
    const commetRef = useRef();
    const [ blogObt, setBlogObt ] = useState([])

    const commet = () => {
        // parte de comentario
        commetRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log('Form commet');
    };

    console.log(blogObt[0]?.title)

    useEffect(()=>{
        axios.get(`http://localhost:3000/blog/${id}`)
            .then((response) => {
                setBlogObt(response.data)
            })
            .catch((error) => {
                console.error('Error al obtener los datos de blog ', error)
            })
    }, [])

    return (
        <div>
            {/* <Sidebar commet={commet} /> */}
            <article>
                <h1>Data</h1>
                {
                    blogObt.map((blog, index) => (
                        <div key={index}>
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                        </div>
                    ))
                }
                <div ref={commetRef}>final</div>
                <FormComment titleComm={blogObt[0]?.title} />
            </article>
        </div>
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
