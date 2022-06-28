import create from 'zustand'
import { Auth } from 'aws-amplify';


const useStore = create((set) => ({
    userObject: {username: ''},
    loading: false,
    fetchUser: async authReq =>{
      // set((state) => ({ loading: true }))
      let response = await Auth.currentUserInfo()
      // if(response == null){
      //   response = ''
      // }
  
      console.log(response)
      set((state) => ({ userObject: response }))
    } 
  }))

export default useStore