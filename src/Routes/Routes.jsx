import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import AddQuery from "../Pages/AddQuery/AddQuery";
import MyQuery from "../Pages/MyQuery/MyQuery";
import MyReommendations from "../Pages/MyRecommendations/MyReommendations";
import Details from "../Pages/DetailsPage/Details";
import QueryPage from "../Pages/QueryPage/QueryPage";
import Recommendation from "../Pages/Recommandation/Recommendation";
import UpdateQuery from "../Pages/UpdateQuery/UpdateQuery";

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
            {
                path:'/addquery',
                element: <AddQuery/>
            },
            {
                path:'/myqueries',
                element:<MyQuery/>
            },
            {
                path:'/queris',
                element:<QueryPage/>
            },
            {
                path:'/recommendforme',
                element:<MyReommendations/>
            },
            {
                path:'/myrecommendation',
                element:<Recommendation/>
            },
            {
                path:'/details/:id',
                element:<Details/>,
                loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`) 
            },
            {
                path:'/update/:id',
                element:<UpdateQuery/>,
                loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
])

export default router