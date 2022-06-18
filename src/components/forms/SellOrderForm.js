import React from 'react';
import { Button, Form, Input, Select } from 'antd';

const SellOrderForm = () => {
  return (
    <Form
    name="sell_order"
    >
        <Form.Item
        name="selling_currency"
        rules={[{
            required: true,
            message: 'Select the currency you want to sell'
        }]}
        >
            <Select placeholder="Select currency to sell">
                <Select.Option value="NGN">NGN</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item
        name="buying_currency"
        rules={[{
            required: true,
            message: 'Select the buy you want to sell'
        }]}
        >
            <Select placeholder="Select currency to buy">
                <Select.Option value="NGN">NGN</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
            </Select>
        </Form.Item>

        <Form.Item>
            <Input placeholder='Selling rate' />
        </Form.Item>

        <Form.Item>
            <Input placeholder='Minimum quantity I want to sell' />
        </Form.Item>

        <Form.Item>
            <Input placeholder='Minimum quantity I want to sell' />
        </Form.Item>

        <Form.Item>
           <Button
           type="primary"
           block
           >Create Sell Order</Button>
        </Form.Item>
    </Form>
  )
}

export default SellOrderForm;
