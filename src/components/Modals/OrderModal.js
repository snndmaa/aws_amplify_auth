import React from 'react'
import { Modal } from 'antd';
import BuyOderForm from '../forms/BuyOrderForm';
import SellOrderForm from '../forms/SellOrderForm';

const OrderModal = ({ visible, type, cancel }) => {
  return (
    <Modal visible={visible} onCancel={cancel} footer={null}>
        {/* {type === 'buy' ? <BuyOderForm /> : <SellOrderForm />} */}
        {type === 'buy' ? <p
        className='order-text'
        >Buy Order</p> : <p
        className='order-text'
        >Sell Order</p>}

        {type === 'buy' ?
        <BuyOderForm />
        :
        <SellOrderForm />
        }
      </Modal>
  )
}

export default OrderModal;
