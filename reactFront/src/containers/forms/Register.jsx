import { useForm } from 'react-hook-form'
import axios from 'axios'
import Navbar from '../Navbar'

const Register = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://127.0.0.1:3000/register', data)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.reload()
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }

    return (
        <>
            <Navbar/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name',{required: true, maxLength: 20})} />
                <input {...register('email', {required: true, maxLength: 20})} />
                <input {...register('password', {required: true, maxLength: 20})} />
                {errors.email && <span>Es requerido</span>}
                <button>enviar</button>
            </form>
        </>
    )
}

export default Register