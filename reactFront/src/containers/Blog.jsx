import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Blog = ({ titleBlog, body }) => {
    const commetRef = useRef();

    const commet = () => {
        // parte de comentario
        commetRef.current.scrollIntoView({ behavior: 'smooth' });
        console.log('Form commet');
    };

    return (
        <div>
            <Sidebar commet={commet} />
            <article>
                <h2>{titleBlog}</h2>
                <p>{body}</p>
                <div ref={commetRef}>final</div>
                <FormComment titleComm={titleBlog} />
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
