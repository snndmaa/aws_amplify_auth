import React from "react";
import { Select, Button } from "antd";

const AccountCard = ({ setType, setVisible }) => {
  return (
    <div>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <div className="mx-6 my-4">
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500 text-sm">Your Balance:</p>
              <p className="text-2xl">
                <span className="line-through">N</span>500,387
              </p>
            </div>

            <div className="">
              <Select defaultValue="NGN">
                <Select.Option value="NGN">NGN</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
              </Select>
            </div>
          </div>

          <div className="flex justify-between">
              <Button type="link"
              onClick={() => {
                setType('buy')
                setVisible(true);
              }}
              className="green-text">Create buy offer +</Button>
              <Button type="link"
              onClick={() => {
                setType('sell')
                setVisible(true);
              }}
              className="red-text">Create sell offer +</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
