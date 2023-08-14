import React, {useRef} from 'react'
import Sidebar  from './Sidebar'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Blog = ({titleBlog, body}) => {

    const commetRef = useRef()
    
    const commet = () =>{
        //parte de comentario
        commetRef.current.scrollIntoView({ behavior: "smooth" });
        console.log("Form commet")
    }

    return (
        <div>
            <Sidebar commet={commet}/>
            <article>
                <h2>{titleBlog}</h2>
                <p>{body}</p>
                <div ref={commetRef}>final</div>
                <FormComment titleComm={titleBlog}/>
            </article>
        </div>
    )
}

const FormComment = ({titleComm}) =>{
    const {register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:3000/comment = ', {
            titleToSave: titleComm,
            comment: data.comment
        })
            .then(response => {
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Comentario</label>
            <input {...register('comment', {required: true})} />
            <button>Comentar</button>
        </form>
    )
}

export default Blog