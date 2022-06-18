import React from 'react';
import { Button, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ForgetPasswordForm = () => {
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

        <Form.Item>
        <Button
        type="primary"
        htmlType="submit"
        className="mt-3"
        block
        >Forgot Password</Button>
        </Form.Item>
    </Form>
  )
}

export default ForgetPasswordForm;
