import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import useStore from '../context/userState.js'
import MainSidebar from '../components/shared/MainSidebar.js'
import { Header, DashboardNewUser, Footer } from "../ui-components"
import "../components/others/newDashContainer.css"


function NewDash() {
  const navigate = useNavigate();
  const signOut = () => {
    Auth.signOut()
    .then(userObject == false ? navigate('/signin') : '')
    .catch(err => console.log(err))
  }
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
            <DashboardNewUser/>
          </div>

        </div>

      </div>

      <div className="containerFooter">
        <Footer/>
      </div>

    </div>
  )
}

export default NewDash