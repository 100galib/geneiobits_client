import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import DetailsPage from "../Pages/Home/DetailsPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>,
                loader: ({params}) => fetch(`http://localhost:5000/property/${params.id}`)
            }
        ]
    }
])


export default routes;