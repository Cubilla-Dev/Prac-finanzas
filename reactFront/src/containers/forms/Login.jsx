import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:3000/login', data)
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.reload();
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Correo</label>
            <input {...register('email', {required: true, maxLength: 20})} />
            {errors.email && <span>Es requerido</span>}
            <label>Contraseña</label>
            <input {...register('password', {required: true, maxLength: 20})} />
            {errors.password && <span>Es requerido</span>}
            <button>Login</button>
        </form>
    )
}

export default Login