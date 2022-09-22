import React from 'react'
import MainSidebar from '../components/shared/MainSidebar.js'
import { Header, NavHistory, Footer } from "../ui-components"


function Activity() {
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
            <NavHistory/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )
}

export default Activity