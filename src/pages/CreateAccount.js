import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CreateAccountForm from '../components/forms/CreateAccountForm';
import AuthenticationButtons from '../components/shared/AuthenticationButtons';


const CreateAccount = () => {
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
        <span className="auth-header text-center">Elink-Transfer</span>
          <div className='auth-card elink-card-width'>
          <p className="text-center auth-sub-header">Create Account</p>
          <CreateAccountForm />
          <div className="text-center">
            <p className="text-pass"
            onClick={() => navigate('/')}
            >Already have an account?</p>
          </div>
          <div className="border-b w-25 border-slate-300"></div>
          <div className='mt-2'>
          <AuthenticationButtons prefix="Sign up" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default CreateAccount;
