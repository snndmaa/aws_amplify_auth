import { Button } from 'antd';
import React from 'react';
import EmptyFrame from '../images/Frame.svg';

const BuyOffer = ({ setType, setVisible }) => {
  return (
    <div className='grid h-screen place-items-center'>
        <img src={EmptyFrame} alt="No offer" />
        <p>You do not have any buy offer. Create a buy offer to see other buy listings</p>
        <Button
        type="primary"
        onClick={() => {
          setType('buy')
          setVisible(true);
        }}
        >
            Create Buy Offer
        </Button>
    </div>
  )
}

export default BuyOffer;
