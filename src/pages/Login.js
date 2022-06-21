import React, { useEffect } from 'react'
import SignInForm from '../components/forms/SignInForm';
import { useNavigate } from 'react-router-dom';
import AuthenticationButtons from '../components/shared/AuthenticationButtons';
// import styled from 'styled-component'

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "#e5e5e5"
    return () => {
      document.body.style.backgroundColor = "#fff"
    }
  }, [])

  return (
    <div className="">
      {/* <div className=""> */}
        <div className="grid h-screen place-items-center">
        <span className="auth-header text-center mt-10">Elink-Transfer</span>
          <div className='auth-card elink-card-width'>
          <p className="text-center auth-sub-header">Sign In</p>
          <SignInForm />
          <div className="text-center">
            <p className="text-pass"
            onClick={() => navigate('/forget-password')}
            >Forgot Password?</p>
            <p className="text-pass"
            onClick={() => navigate('/create-account')}
            >Create an account</p>
          </div>
          <div className="border-b w-25 border-slate-300"></div>
          <div className='mt-2'>
          <AuthenticationButtons prefix="Sign in" />
          </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Login;


// const Container = styled.div`
//     display: flex;
//   align-items: center;
//   justify-content: center;
// `
