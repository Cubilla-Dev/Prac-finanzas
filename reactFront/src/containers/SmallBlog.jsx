import React from 'react'
import { useNavigate } from 'react-router-dom'


const SmallBlog = ({title, category}) => {
    const navigate = useNavigate()

    const refirecttoBlog = () =>{
        navigate('/blog')
    }

    return (
        <article style={{ 'backgroundColor': 'green', color: 'white' }} onClick={refirecttoBlog}>
            <h2>{title}</h2>
            <div>
                {
                    category.map((cate, index) => (
                        <span key={index}>{cate} </span>
                    ))
                }
            </div>
        </article>
    )
}

export default SmallBlog