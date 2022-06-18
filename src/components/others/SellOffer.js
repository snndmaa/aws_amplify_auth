import { Button } from 'antd';
import React from 'react';
import EmptyFrame from '../images/Frame.svg';

const SellOffer = ({ setType, setVisible }) => {
  return (
    <div className='grid h-screen place-items-center'>
        <img src={EmptyFrame} alt="No offer" />
        <p>You do not have any sell offer. Create a buy offer to see other SELL listings</p>
        <Button
        type="primary"
        onClick={() => {
          setType('sell')
          setVisible(true);
        }}
        >
            Create Sell Offer
        </Button>
    </div>
  )
}

export default SellOffer;
