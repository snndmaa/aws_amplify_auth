import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth, Hub } from 'aws-amplify'
import useStore from '../context/userState.js'
import MainSidebar from '../components/shared/MainSidebar.js'
import { Header, DashboardNewUser, Footer } from "../ui-components"
import "../components/others/newDashContainer.css"
import axios from 'axios'


function NewDash() {
  
  const navigate = useNavigate()
  const signOut = () => {
    Auth.signOut()
    .then(userObject == false ? navigate('/signin') : '')
    .catch(err => console.log(err))
  }
  const {userObject, loading, fetchUser} = useStore()

  useEffect(()=>{
    (async() => {
      await fetchUser()
      Auth.currentAuthenticatedUser()
      .then(() => {
        const amount_text = document.getElementsByClassName('amplify-text')[1]
        console.log(amount_text)
        amount_text.innerText = 'dfd'
      })
      // .then(async (user) => {
      //   await axios.post(`http://localhost:5000/v1/wallet/${user.attributes.email}`)
      //   // .then((res) => console.log(res.data))
      //   .then(async (res) => {
      //     console.log(res.data.data)
      //     await axios.post(`http://localhost:5000/v1/wallet/zzz`, {
      //       "publicKey": res.data.data.publicKey,
      //       "secretKey": res.data.data.secretKey,
      //       "asset_code": "TEST",
      //       "asset_issuer": "GC6NGB45CEQD76LLBSUBPSEURF45NNG4QU6EK3HYWQ3PFGVFS6CQEF2H"
      //     })
      //     .then(response => console.log(response.data.data[0].balance))
      //     .catch((error) => console.log(error.response.data))
      //   })

      // })
      // .catch((error) => console.log(error.response.data))

    })();

    // (async() => {
    //   if (userObject !== null && userObject !== ''){
    //     const response = await Auth.currentAuthenticatedUser();  //Total Info
    //     return console.log(response)
    //   }
    // })()
    // console.log(userObject)
    // console.log(userObject[6]['Value'])

    // (()=>{
    //   if (userObject !== ''){

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
            <DashboardNewUser overrides={{
              // 'Title32674910': { onClick: (e)=> console.log(e) }
              
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

export default NewDash