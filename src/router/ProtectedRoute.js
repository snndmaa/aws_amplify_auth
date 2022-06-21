// import { lazy } from 'react';
import Sidebar from '../components/shared/Sidebar';
import SignIn from "../pages/signIn";
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useState } from 'react';
import { Auth } from 'aws-amplify';


const Navbar = lazy(() => import('../components/shared/Navbar'));

const ProtectedRoute = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    Auth.currentUserInfo().then(
        data => data === null ? setIsAuthenticated(false) : ''
    )
    .catch(e =>{
        console.log(e)
        setIsAuthenticated(false)
    })
    const { component: Component } = props;
    
    if(!isAuthenticated) {
        return (
            <Routes>
            <Route
                path="*"
                element={<Navigate to="/signin" />}
            />
            </Routes>
        )
    }

    if(isAuthenticated) {
        return (
            <>
            <div className="grid grid-cols-5 gap-5">
           <Sidebar />
         <div className="col-span-4 pr-10 pl-10">
            <div className="mt-20">
            <Navbar />
            <div>
            <Component />
            </div>
            </div>
         </div>
         </div>
            </>
        )
    }

}

export default ProtectedRoute;
