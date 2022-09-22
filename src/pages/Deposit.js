import React from 'react'
import { Header, DashboardCashIn, Footer } from "../ui-components"
import MainSidebar from '../components/shared/MainSidebar.js'
import MonoConnect from '@mono.co/connect.js'


function Deposit() {
  
  const monoConnects = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      key: 'test_pk_txILHvD85YFmYmDWIynt',
      scope: "payments",
      data: {
        type: "one-time-debit", // one-time-debit || recurring-debit
        amount: 150000, // amount in kobo
        description: "Elink Naira Payment",
      },
      onSuccess: (chargeObject) => console.log(`charged successfully`, chargeObject),
    })

    monoInstance.setup()

    return monoInstance
  }, [])  
  
  return (
    <div className='outerContainer'>

      <div className='innercontainer'>

        <div className="containerSidebar">

          <MainSidebar/>

        </div>

        <div className="containerCombo">

          <div className="containerComboHeader">
            <Header/>
          </div>

          <div className="ContainerComboContent">
            <DashboardCashIn overrides={{"Btn": { onClick: () => monoConnects.open() }
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