import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://127.0.0.1:3000/register', data)
            .then(response => {
                //redireccionar
                console.log(response.data.redirect)
                navigate(response.data.redirect)
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firtname',{required: true, maxLength: 20})} />
            <input {...register('lastname',{required: true, maxLength: 20})} />
            <input {...register('email', {required: true, maxLength: 20})} />
            <input {...register('password', {required: true, maxLength: 20})} />
            {errors.email && <span>Es requerido</span>}
            <button>enviar</button>
        </form>
    )
}

export default Register