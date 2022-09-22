import React from 'react'
import { Auth } from 'aws-amplify'
import useStore from '../../context/userState.js'
import { Sidebar, Header, DashboardNewUser, Footer } from '../../ui-components'
import { useNavigate } from 'react-router-dom'
import '../others/container.css'


function MainSidebar(component) {

  const navigate = useNavigate()
  const signOut = async () => {
    await Auth.signOut()
    navigate('/signin')
    // .then(window.location.reload(false))
    .catch(err => console.log(err))
  }
  const {userObject, loading, fetchUser} = useStore()

  React.useEffect(()=>{
    (async() => await fetchUser())();

    // (async() => {
    //   if (userObject !== null && userObject !== ''){
    //     const response = await Auth.currentAuthenticatedUser();  //Total Info
    //     return console.log(response)
    //   }
    // })()

    }, [userObject.username])

  return (
  <Sidebar overrides={{
      "BtnLogout": { onClick: () => signOut() }, 
      "ButtonHome": { onClick: () => navigate('/dashboard') },
      "ButtonDeposit": { onClick: () => navigate('/deposit') },
      "ButtonWithdrawal": { onClick: () => navigate('/withdraw') },
      "ButtonListOffer": { onClick: () => navigate('/listoffer') },
      "ButtonActivity": { onClick: () => navigate('/activity') },
      "ButtonPortfolio": { onClick: () => navigate('/portfolio') },
      "ButtonHistory": { onClick: () => navigate('/history') },
      "ButtonProfile": { onClick: () => navigate('/profile') },
      "ButtonSettings": { onClick: () => navigate('/settings') },
      "ButtonLinkFunds": { onClick: () => navigate('/linkfund') },
  }}
  />
  )
}

export default MainSidebar