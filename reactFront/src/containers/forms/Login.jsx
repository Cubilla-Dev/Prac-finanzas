import { useForm } from 'react-hook-form'
// import axios from 'axios'
import useFormData from '../../hook/useFormData'


const Login = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const {error, peticion} = useFormData()

    const onSubmit = (data) => {
        peticion('post', 'http://127.0.0.1:3000/login', data)
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