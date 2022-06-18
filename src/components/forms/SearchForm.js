import React from 'react';
import { Form, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchForm = () => {
  return (
      <Form>
          <Form.Item
          name="search"
          >
              <Input placeholder='Search'  className='elink-rounded-sm' prefix={<SearchOutlined />} />
          </Form.Item>
      </Form>
  )
}

export default SearchForm;
