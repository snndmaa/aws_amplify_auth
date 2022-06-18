import { Button, Tabs } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import BuyOffer from "../components/others/BuyOffer";
import SellOffer from "../components/others/SellOffer";
import OrderModal from "../components/Modals/OrderModal";
import AccountCard from "../components/others/AccountCard";

const { TabPane } = Tabs;

const Subscription = () => {
  const [type, setType] = useState('');
  const [visible, setVisible] = useState(false);

  const cancel = () => {
    setVisible(false);
  }

  return (
    <div>
      <OrderModal
      type={type}
      visible={visible}
      cancel={cancel}
      />
      <div className="flex justify-between">
        <div className="">
          <p className="text-2xl font-bold">Hi, Ebenezer</p>
          <p className="sub903">Account ID: 12AGH67YG</p>
        </div>

        <div className="">
          <Button type="primary" icon={<PlusOutlined />}>
            Fund Account
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 shadow-black">
        <AccountCard setType={setType} setVisible={setVisible} />
      </div>

      <div className="mt-5">
      <Tabs defaultActiveKey="1">
        <TabPane tab="BUY" key="1">
          <BuyOffer setType={setType} setVisible={setVisible} />
        </TabPane>
        <TabPane tab="SELL" key="2">
          <SellOffer setType={setType} setVisible={setVisible} />
        </TabPane>
        <TabPane tab="ALL TRADES" disabled key="3">
          <p>All Trades</p>
        </TabPane>
      </Tabs>
      </div>
    </div>
  );
};

export default Subscription;
