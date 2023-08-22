import { useForm } from 'react-hook-form'
import axios from 'axios'
import Navbar from '../Navbar'
import useFormData from '../../hook/useFormData'

const Register = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const { error, peticion } = useFormData()

    const onSubmit = (data) => {
        console.log(data)
        peticion('post', 'http://127.0.0.1:3000/register', data)
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