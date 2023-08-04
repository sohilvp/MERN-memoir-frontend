import React, { useContext, useEffect } from 'react'
import { FetchContext } from '../../context/ContextApi';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Sections from '../../Components/Sections/Sections';
import Loader from '../../Components/Loader/Loader'
import axios from 'axios';

const Home = () => {
  const {load,setPosts} =useContext(FetchContext)

  useEffect(()=>{
    
    const fetchPost = async()=>{
      try {
      
        const post = await axios.get('https://memoir-server-backend.onrender.com/posts')
        setPosts(post.data)
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost()
  },[setPosts])
  
  if(load){
    return <Loader/>
  }
  return (
    <React.Fragment>
       <Navbar/>
      <div className='container'>
        <Header/>
        <Sections/>
        </div>
    </React.Fragment>
    
  )
}

export default Home