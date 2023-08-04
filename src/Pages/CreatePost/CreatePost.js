import React, { useContext, useRef, useState } from 'react'
import { ContextUser } from '../../context/UserContext'
import Navbar from '../../Components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './createpost.css'

const CreatePost = () => {
    const {auth}= useContext(ContextUser)
    const [text,setText]= useState('')
    const [file,setFile]= useState('')
    const titleRef =useRef()
    const navigate = useNavigate()

    const handleCreatePost =async(e)=>{
        e.preventDefault()
        const paragraphs = text.split('\n');
        try {
         const res = await axios.post('https://memoir-server-backend.onrender.com/posts',{
            title:titleRef.current.value,
            text:paragraphs,
            photo:file,
            username:auth.username
        },{headers:{"Content-Type": "multipart/form-data"}})
        if(res.status === 201){
          toast.success('Blog created successfully')
          setTimeout(()=>{
            navigate('/')
          },1000)
          
        }
  
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
       
    }
  return (
    <React.Fragment>
<Navbar/>
<form className='create_container container' onSubmit={handleCreatePost}>
      <h1>New blog</h1>
      <input type="text" ref={titleRef} className='title'  placeholder='Title'/>
      <div className="create_first_row">

      <input type="text" value={auth.username} disabled/>
      <input type="file"   onChange={(e)=>setFile(e.target.files[0])} />
      </div>
      <textarea rows='15' type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Write something....'/>
      
      <div className="btn_container">
      <button type="submit"> post </button>
      </div>
      <ToastContainer position="bottom-center" theme="dark"/>
    </form>
    </React.Fragment>
    
  )
}

export default CreatePost
