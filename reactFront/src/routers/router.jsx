import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Login from '../containers/forms/Login'
//import AuthProvider from "../auth/AuthProvider";
import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <PrivateRouter>
                <Home/>
            </PrivateRouter>
    },
    {
        path: '/login',
        element:
            <PublicRouter>
                <Login/>
            </PublicRouter> 
    },
    // {
    //     path: '/practica',
    //     element: <AuthProvider/>
    // }
])