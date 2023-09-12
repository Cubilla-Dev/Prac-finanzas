import { createBrowserRouter } from "react-router-dom";
import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import Budget from "../containers/forms/budget";

import Home from "../containers/Home";
import Login from '../containers/forms/Login'
import Register from '../containers/forms/Register'
import Blog from '../containers/Blog'
import FormBlog from "../containers/forms/FormBlog";
import NextUi from '../containers/NextUi'
import SmallBlog from "../containers/SmallBlog";

export const router = createBrowserRouter([
    {
        
        path: '/',
        element:
            <PublicRouter>
                <Home/>
            </PublicRouter>,
        errorElement: <p>error</p>,
        children: [
            {
                index: true,
                element: <SmallBlog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },
    {
        path: "/",
        element:
                <PrivateRouter>
                    < Home />,
                </PrivateRouter>,
        errorElement: <p>Error</p>,

        children:[
            {
                path: '/formblog',
                element: <FormBlog/>
            },
            {
                path: '/blog/:id',
                element: <Blog/>
            },
        ]
    },
    {
        path:"*",
        element: <p>vuelve</p>
    },
])

