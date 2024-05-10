import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import AddQuery from "../Pages/AddQuery/AddQuery";
import MyQuery from "../Pages/MyQuery/MyQuery";
import MyReommendations from "../Pages/MyRecommendations/MyReommendations";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element: <LoginPage/>
            },
            {
                path:'/registration',
                element:<RegistrationPage/>
            },
            // {
            //     path:'/addquery',
            //     element: <AddQuery/>
            // },
            {
                path:'/myqueries',
                element:<MyQuery/>
            },
            {
                path:'/queris',
                element:<MyQuery/>
            },
            {
                path:'/myrecommendations',
                element:<MyReommendations/>
            }
        ]
    }
])

export default router