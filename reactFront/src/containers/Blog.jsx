import React from 'react'
import Sidebar  from './Sidebar'

const Blog = ({title, body}) => {
    return (
        <div>
            <Sidebar/>
            <article>
                <h2>{title}</h2>
                <p>{body}</p>
            </article>
        </div>
    )
}

export default Blog