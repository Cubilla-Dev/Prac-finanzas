import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Login from '../containers/forms/Login'
import Register from '../containers/forms/Register'
//import AuthProvider from "../auth/AuthProvider";
import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import Budget from "../containers/forms/budget";

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
    {
        path: '/register',
        element:
            <PublicRouter>
                <Register/>
            </PublicRouter> 
    },
    {
        path: '/budget',
        element:
            <PrivateRouter>
                <Budget/>
            </PrivateRouter> 
    },
])