import React from 'react'
import { Header, DashboardLinkFunds, Footer } from "../ui-components"
import MonoConnect from '@mono.co/connect.js'
import MainSidebar from '../components/shared/MainSidebar.js'


function LinkFunds() {

  const MonoConnects = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget Closed'),
      onLoad: () => console.log('Widget Loaded Successfully'),
      onSuccess: ({code}) => console.log(`Linked Successfully: ${code}`),
      key: 'test_pk_txILHvD85YFmYmDWIynt'
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
            <DashboardLinkFunds overrides={{"SubmitAccountType": { onClick: () => MonoConnects.open() }
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

export default LinkFunds