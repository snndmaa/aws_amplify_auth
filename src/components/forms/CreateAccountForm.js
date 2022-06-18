import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const CreateAccountForm = () => {
  const onFinish = values => {

  }
  return (
    <Form
    layout="horizontal"
    name="login_form"
    onFinish={onFinish}
    >
        <Form.Item
        name="email"
        // rules={[{
        //     required: true,
        //     message: 'Enter your username!',
        // }]}
        >
        <Input placeholder="EMAIL ADDRESS" prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item
        name="username"
        >
        <Input placeholder="USERNAME" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
        name="phoneNumber"
        >
        <Input placeholder="PHONE NUMBER" prefix={<PhoneOutlined />} />
        </Form.Item>

        <Form.Item
        name="password"
        rules={[{
            required: true,
            message: 'Enter your password!',
        }]}
        >
        <Input.Password placeholder="PASSWORD" prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item>
        <Button
        type="primary"
        htmlType="submit"
        className="mt-3"
        block
        >Create Account</Button>
        </Form.Item>
    </Form>
  )
}

export default CreateAccountForm;
