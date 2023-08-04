import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/user-avatar.png'
const Register = () => {
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [file,setFile] = useState('')
  const navigate = useNavigate()

   const submitHandler =async(e)=>{
    e.preventDefault()
    try {
     const res= await axios.post('https://memoir-server-backend.onrender.com/register',{
      username:userName,email,password,
      profile:file
    },{headers:{"Content-Type": "application/json"}})
    if(res.status === 201){
        toast.success(res.data.message)
        setTimeout(()=>{

          navigate('/login')
        },1000)
    }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    
  }
  return (
    <React.Fragment>
      

      <Navbar/>
      <form className='register_container container' onSubmit={submitHandler}>
      <h1>Register</h1>
      <div className="register_left">
      <label htmlFor="profile">
        <img src={avatar} alt="alt" className='profieAvatar' />
      </label>
      <input type="file" id='profile' onChange={(e)=>setFile(e.target.files[0])} />
      </div>
      <div className="register_right">

      <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}  placeholder='Username'/>
      <input type="text" value={email} onChange={e=>setEmail(e.target.value)}  placeholder='Email'/>
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password'/>
      
      <input type="submit" />
      </div>
      <ToastContainer/>
    </form>
    
    </React.Fragment>
    
  )
}

export default Register


