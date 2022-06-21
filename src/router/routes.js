import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// import loader component
import Login from "../pages/login";
import CreateAccount from "../pages/CreateAccount";
import ForgetPassword from "../pages/ForgetPassword";
import SignIn from "../pages/signIn";
import { Auth} from 'aws-amplify';


// const Loading = () => <LoadingScreen />;

// lazy load components
const Subscription = lazy(() => import("../pages/Subscription"));
const Dashboard = lazy(() => import("../pages/Dashboard"));


const Router = () => {
  const userInfo = Auth.currentUserInfo()
  const isAuthenticated = userInfo === null ? false : true
  
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading</p>}>
        <Routes>
          <Route path="/lg" element={<Login />} />
          <Route path="/" element={<SignIn/>}/>
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Private routes */}
          <Route
            path="/subscribe"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Subscription}
              />
            }
          />

           <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Dashboard}
              />
            }
          />

          {/* 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
