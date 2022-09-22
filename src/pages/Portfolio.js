import React from 'react'
import { Header, DashboardPortfolio, Footer } from "../ui-components"
import MainSidebar from '../components/shared/MainSidebar.js'

function Portfolio() {
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
            <DashboardPortfolio/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )

}

export default Portfolio