import React, { createContext, useState } from 'react'
 

export const ContextUser = createContext() 
const UserContext = ({children}) => {
    const [auth,setAuth] = useState({id:'',username:'',email:'',profile:''})
  return (
    <ContextUser.Provider value={{auth,setAuth}}>
        {children}
    </ContextUser.Provider>
  )
}

export default UserContext