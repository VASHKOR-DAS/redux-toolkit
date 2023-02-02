import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    }
])