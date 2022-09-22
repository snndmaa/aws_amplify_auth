import React from 'react'
import { Header, DashboardCashOut, Footer } from "../ui-components"
import MainSidebar from '../components/shared/MainSidebar.js'


function Withdraw() {
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
            <DashboardCashOut/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )
}

export default Withdraw