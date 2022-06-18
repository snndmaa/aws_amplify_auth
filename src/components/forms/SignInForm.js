import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignInForm = () => {
  const onFinish = values => {

  }
  return (
    <Form
    layout="horizontal"
    name="login_form"
    onFinish={onFinish}
    >
        <Form.Item
        name="username"
        // rules={[{
        //     required: true,
        //     message: 'Enter your username!',
        // }]}
        >
        <Input placeholder="USERNAME" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
        name="password"
        rules={[{
            required: true,
            message: 'Enter your password!',
        }]}
        >
        <Input placeholder="PASSWORD" prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item>
        <Button
        type="primary"
        htmlType="submit"
        className="mt-3"
        block
        >LOGIN</Button>
        </Form.Item>
    </Form>
  )
}

export default SignInForm;
