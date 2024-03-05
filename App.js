
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ReactDOM from 'react-dom/client';

import {Header, Body, About, Footer, ContactUs, SimulateData, Errorelement} from "./components/index"

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
    return (
        <div className = "wrapper">
            <Header />
            <Outlet />

            <Footer />
        </div>
    )
}

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
            , errorElement: <Errorelement />,
            children: [
                {
                    path: "/",
                    element: <Body />
                    
                },
                {
                    path: "/about",
                    element: <About />,
                }, 
                {
                    path: "/contact",
                    element: <ContactUs />,
                }
                 

            ]
        }
        
    ]
)

root.render(<RouterProvider router={router} />);