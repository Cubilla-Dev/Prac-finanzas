import { createBrowserRouter } from "react-router-dom";
import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import Budget from "../containers/forms/budget";

import Home from "../containers/Home";
import Login from '../containers/forms/Login'
import Register from '../containers/forms/Register'
import Blog from '../containers/Blog'
import FormBlog from "../containers/forms/FormBlog";


export const router = createBrowserRouter([
    {
        path: '/',
        element:
            //<PublicRouter>
                <Home/>
            //</PublicRouter>
    },
    {
        path: '/login',
        element:
            <PublicRouter>
                <Login/>
            </PublicRouter> 
    },
    {
        path: '/register',
        element:
            <PublicRouter>
                <Register/>
            </PublicRouter> 
    },
    {
        path: '/formblog',
        element:
            <PrivateRouter>
                <FormBlog/>
            </PrivateRouter> 
    },
    {
        path: 'blog/:id',
        element: <Blog/>
            // <PrivateRouter>
            //     <Blog/>
            // </PrivateRouter> 
    },

])