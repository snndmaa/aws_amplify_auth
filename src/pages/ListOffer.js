import React from 'react'
import { Header, DashboardListOffer, Footer } from "../ui-components"
import MainSidebar from '../components/shared/MainSidebar.js'


function ListOffer() {
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
            <DashboardListOffer/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )
}

export default ListOffer