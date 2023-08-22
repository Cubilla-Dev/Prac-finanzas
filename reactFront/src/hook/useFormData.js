import React, {useState} from 'react';
import axios from 'axios'


const useFormData = () => {
    const [error , setError ] = useState()

    const peticion = (met, urlPet, data) => {
        axios({
            method: met,
            url: urlPet,
            data: data
        })
            .then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.reload();
            })
            .catch((error) => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error('Error al loguearse', error);
                setError(error)
            });
    }


    return {
        error,
        peticion
    }
}

export default useFormData