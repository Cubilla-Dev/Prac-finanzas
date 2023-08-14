import { useForm } from 'react-hook-form'
import axios from 'axios'

const Budget = () => {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:3000/Budget = ', data)
            .then(response => {
                //const token = response.data.token;
                //localStorage.setItem('token', token);
                // console.log(response.data.redirect)
                // navigate(response.data.redirect)
                //window.location.reload();
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Ingresos</label>
            <input {...register('ingreso', {required: true, maxLength: 20})} />
            <label></label>
            <input {...register('password', {required: true, maxLength: 20})} />
            <button>Budget</button>
        </form>
    )
}

export default Budget 


