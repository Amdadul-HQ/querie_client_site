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
import PrivateComponet from "../Private/PrivateComponet";

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
                element: <PrivateComponet><AddQuery/></PrivateComponet>
            },
            {
                path:'/myqueries',
                element:<PrivateComponet><MyQuery/></PrivateComponet>
            },
            {
                path:'/queris',
                element:<QueryPage/>
            },
            {
                path:'/recommendforme',
                element:<PrivateComponet><MyReommendations/></PrivateComponet>
            },
            {
                path:'/myrecommendation',
                element:<PrivateComponet><Recommendation/></PrivateComponet>
            },
            {
                path:'/details/:id',
                element:<PrivateComponet><Details/></PrivateComponet>,
                loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`,{credentials:'include'}) 
            },
            {
                path:'/update/:id',
                element:<PrivateComponet><UpdateQuery/></PrivateComponet>,
                loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`,{credentials:'include'})
            }
        ]
    }
])

export default router