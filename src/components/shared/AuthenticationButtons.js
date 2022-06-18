import React from 'react';
import { Button } from 'antd';
import awsconfig from '../../aws-exports';
import { Auth, Hub } from 'aws-amplify';

const AuthenticationButtons = ({ prefix }) => {
  return (
    <div className='text-center'>
      <div>
        <Button
          type="default"
        className="ant-btn-elink"
        onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
        >{prefix} with Google</Button>
      </div>
      <div className="mt-3">
        <Button
        className="ant-btn-elink"
        type="default"
        onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
        >{prefix} with Facebook</Button>
      </div>
    </div>
  )
}

export default AuthenticationButtons
