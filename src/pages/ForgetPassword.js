import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ForgetPasswordForm from '../components/forms/ForgotPasswordForm';
import AuthenticationButtons from '../components/shared/AuthenticationButtons';


const ForgetPassword = () => {
    const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "#e5e5e5"
    return () => {
      document.body.style.backgroundColor = "#fff"
    }
  }, [])

  return (
    <div className="">
        <div className="grid h-screen place-items-center">
        <span className="auth-header text-center mt-10">Elink-Transfer</span>
          <div className='auth-card elink-card-width'>
          <p className="text-center auth-sub-header">Forgot Password</p>
          <ForgetPasswordForm />
          <div className="text-center">
            <p className="text-pass"
            onClick={() => navigate('/')}
            >Sign in to your account?</p>
            <div className="border-b w-25 border-slate-300"></div>
          <div className='mt-2'>
          <AuthenticationButtons prefix="Sign in" />
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ForgetPassword;
