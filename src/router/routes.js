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
import NewDash from "../pages/NewDash"
import SignIn from "../pages/signIn";
import Demo from "../pages/Demo";
import LinkFunds from "../pages/LinkFunds";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import { Auth} from 'aws-amplify';
import ListOffer from "../pages/ListOffer";
import Activity from "../pages/Activity";
import Portfolio from "../pages/Portfolio";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";


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
                component={NewDash}
              />
            }
          />

          <Route
            path="/zzz"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Demo}
              />
            }
          />

          <Route
            path="/linkfund"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={LinkFunds}
              />
            }
          />

          <Route
            path="/deposit"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Deposit}
              />
            }
          />

          <Route
            path="/withdraw"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Withdraw}
              />
            }
          />

          <Route
            path="/listoffer"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={ListOffer}
              />
            }
          />

          <Route
            path="/activity"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Activity}
              />
            }
          />

          <Route
            path="/portfolio"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Portfolio}
              />
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={History}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Profile}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute
                // isAuthenticated={isAuthenticated}
                component={Settings}
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
