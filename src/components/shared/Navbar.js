import React from 'react';
import SearchForm from '../forms/SearchForm';
import { AlertOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className="flex justify-between">
        <div className="">
            <SearchForm />
        </div>

        <div className="inline-block">
          <div className='flex justify-between'>
            <div className='pr-5'>
            <AlertOutlined />
            </div>
            <p>Pic</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
