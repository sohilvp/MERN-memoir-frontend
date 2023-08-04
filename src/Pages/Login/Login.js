import React, { useContext, useRef} from 'react'
import {ContextUser} from '../../context/UserContext'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import './login.css'

const Login = () => {
  const {setAuth}=useContext(ContextUser)
  const navigate =useNavigate()
  const userRef =useRef()
  const passwordRef =useRef()

  const submitHandler =async(e)=>{
    e.preventDefault()
    
    try {
      const res = await axios.post('https://memoir-server-backend.onrender.com/auth',{ 
        email:userRef.current.value,
        password:passwordRef.current.value,
      },{withCredentials:true })
      setAuth(prev=>({
        ...prev,
        id:res?.data?.user?._id,
        username:res?.data?.user?.username,
        email:res?.data?.user?.email,
        profile:res?.data?.user?.profilePic,
      }))
      navigate('/')
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <React.Fragment>
      

      <Navbar/>
    <form className='form_container container' onSubmit={submitHandler}>
      <h1>Login</h1>
      <input type="text" ref={userRef}  placeholder='Email'/>
      <input type="password" ref={passwordRef} placeholder='Password'/>
      <p>New user ?<Link to='/register'> Create account</Link></p>
      <input type="submit" />
    </form>
      
    </React.Fragment>
    
  )
}

export default Login