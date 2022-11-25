import React, {useState} from 'react'
import { Header, DashboardCashIn, Footer } from "../ui-components"
import MainSidebar from '../components/shared/MainSidebar.js'
import MonoConnect from '@mono.co/connect.js'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { Auth } from 'aws-amplify'


function Deposit() {
  const [amount, setAmount] = useState(null)
  const [walletExists, setWalletExists] = useState(false)

  useEffect(() => {

    Auth.currentAuthenticatedUser()
    .then(async (user) => {
      await axios.post('http://localhost:5000/v1/wallet', {
        userId: user.attributes.email,
        pinCode: '1234'
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response.data))
    })
  }, [])

  const monoConnects = React.useCallback(() => {
    const monoInstance = new MonoConnect({
      key: 'test_pk_txILHvD85YFmYmDWIynt',
      scope: "payments",
      data: {
        type: "onetime-debit", 
        amount: amount, 
        description: "Elink Naira Payment",
      },
      onSuccess: (chargeObject) => console.log(`charged successfully`, chargeObject),
    }, [amount])

    monoInstance.setup()

    return monoInstance
  }, [amount])  
  
  // const post = {
  //   userId: 'zxasasa',
  //   pinCode: '1234'
  // }

  const NumberErrorMessage = () => toast.error('Please enter a Number')

  return (
    <div className='outerContainer'>

      <ToastContainer />

      <div className='innercontainer'>

        <div className="containerSidebar">

          <MainSidebar/>

        </div>

        <div className="containerCombo">

          <div className="containerComboHeader">
            <Header/>
          </div>

          <div className="ContainerComboContent">
            <DashboardCashIn overrides={{
              "Btn": { onClick: () =>{
                if (isNaN(amount)){
                  NumberErrorMessage()
                }
                else{
                  monoConnects().open()
                }
              }},
              "TextField": { onChange: (e) => setAmount(e.target.value) }
            }}/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )
}

export default Deposit