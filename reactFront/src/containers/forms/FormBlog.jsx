import { useForm } from 'react-hook-form'
import axios from 'axios'

const FormBlog = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:3000/formblog', data)
            .then(response => {
                //para limpiar los input
                reset()
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Titulo</label>
            <input {...register('title_blog', {required: true})} />
            {errors.titulo_blog && <span>Es requerido</span>}
            <label>Contenido</label>
            <input {...register('body_blog', {required: true})} />
            {errors.body_blog && <span>Es requerido</span>}
            <button>Agregar Blog</button>
        </form>
    )
}

export default FormBlog