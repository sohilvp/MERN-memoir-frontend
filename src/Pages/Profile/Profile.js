import React, { useContext, useEffect, useState } from 'react'
import { ContextUser } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import './profile.css'
import { basetoString } from '../../fun/basetoString';
import default_img from '../../assets/user-avatar.png'

const Profile = () => {
  const {auth,setAuth} = useContext(ContextUser)
  const [email,setEmail]=useState('')
  const [file,setFile]=useState('')
  const [oldPassword, setOldPassword]= useState('')
  const [newPassword, setNewPassword]= useState('')
  

  useEffect(()=>{

   const fetchUser = async()=>{
    try {
      const res = await axios.get('https://memoir-server-backend.onrender.com/user/'+auth.id)
      
      setEmail(res?.data?.user?.email)
      
      
    } catch (error) {
      console.log(error);
    }
   }
   fetchUser()
  },[auth.id])

  const profileUpdate =async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.patch('https://memoir-server-backend.onrender.com/user/'+auth.id,{
      
       email,
       oldPassword,
       newPassword,
       profile:file
      },{headers:{"Content-Type": "multipart/form-data"}})
      setAuth(prev=>({
        ...prev,
        id:res?.data?.user?._id,
        username:res?.data?.user?.username,
        email:res?.data?.user?.email,
        profile:res?.data?.user?.profilePic,
      }))
      setFile('')
      setOldPassword('')
      setNewPassword('')
      
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <React.Fragment>
<Navbar/>
<form className='profile_container container' onSubmit={profileUpdate}>
      
      <div className="user_container">
        <label htmlFor="profile">

      <img src={auth.profile?`data:image/png;base64,${basetoString(auth.profile?.data?.data)}`: default_img} alt="profile pic" />
        </label>
        <input type="file"  id="profile" onChange={(e)=>setFile(e.target.files[0])}/>
<div className="user_info">

       <p>Name: {auth.username}</p>
       <p>joined:{new Date().toDateString()}</p>
        <p>@{auth.username}</p>
</div>
      </div>
      <div className="input_container">

      <div className="first_row">
        <label htmlFor="email">Update details</label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email'/>

      <div className="second_row">
 
      <input type="password" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} placeholder='old Password'/>
      <input type="password"  value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder='new Password'/>
      
      </div>
      </div>
      </div>
      <div className="btn_container">

      <button type='submit'> update </button>
      </div>
      <ToastContainer/>
    </form>
    </React.Fragment>
    
  )
}

export default Profile