import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import SharedModal from "../components/Modals/SharedModal";
import Card from "../components/shared/Card";
import { Authenticator } from "@aws-amplify/ui-react";
import axios from 'axios'
import Loader from "../components/shared/loader";
import useStore from '../context/userState.js'




const subpost = (obj) => {

  const thing = JSON.stringify(obj)
  axios
  .post(`http://www.elinkshield.com:4000/user/${obj.username}/subscribe`, {
    userObject: thing
  })
  .catch(e=>console.log(e))
}

const Dashboard = () => {
  const navigate = useNavigate();

  const {userObject, loading, fetchUser} = useStore()
  useEffect(()=>{
    (async() => await fetchUser())();

    // (async() => {
    //   if (userObject !== null && userObject !== ''){
    //     const response = await Auth.currentAuthenticatedUser();  //Total Info
    //     return console.log(response)
    //   }
    // })()

    }, [userObject.username])



  const [visibble, setVisible] = useState(false);
  const [link, setLink] = useState("");
  const [products] = useState([
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
    {
      link: "/subscribe",
      image: "",
      title: "Elink Exchange",
      description: "A p2p fiat currency platform, just at your finger tips",
    },
  ]);
  return loading ? <Loader/> : (
    <div>
      <SharedModal
        visibble={visibble}
        onCancel={() => {
          setVisible(false);
          setLink("");
        }}
      >
        <p className="subscription-confirmation mt-2 mb-5">
          By clicking confirm, you've agreed to our terms and policy as stated{" "}
          <a href="/">here</a>
        </p>

        <div className="flex items-center justify-center mt-3">
          <div className="mr-3">
            <Button
            className="elink-bg-red elink-white elink-rounded-sm"
              onClick={() => {
                setVisible(false);
                setLink("");
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="ml-5">
            <Button
            className="elink-bg-blue elink-white elink-rounded-sm"
            onClick={() => subpost(userObject)}>Continue</Button>
          </div>
        </div>
      </SharedModal>
      <p className="text-2xl font-bold">Hi, { userObject.username ? userObject.username : '' }</p>
      <p className="text-lg mt-5">List of available products</p>

      <div className="grid grid-cols-3 gap-3">
        {products.map((item) => (
          <Card>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <Button
              type="ghost"
              className="elink-bg-blue elink-white elink-rounded-sm"
              block
              onClick={() => {
                setVisible(true);
                setLink(item.link);
              }}
            >
              Subscribe
            </Button>
          </Card>
        ))}
      </div>

      <div>
        <Authenticator>
          {({ signOut }) => {
            if(userObject === null){ return navigate('/signin') }
            // window.location.reload(false) 
            return <button onClick={signOut}>Sign Out</button>}
            
          }
        </Authenticator>
    </div>
    </div>
  );
};

export default Dashboard;
