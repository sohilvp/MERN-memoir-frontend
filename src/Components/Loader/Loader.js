import React, { useEffect, useState } from "react";
import { Spin } from "react-cssfx-loading";
import "./loader.css";

const Loader = () => {
  const [loading, setLoading] = useState('Loading...')
  useEffect(()=>{
    const timeOut1 =  setTimeout(()=>{
      setLoading('Data is on its way, sit tight')
     },15000)
     const timeOut2 =  setTimeout(()=>{
    setLoading('Almost there...')
   },29000)
  
  const timeOut3 = setTimeout(()=>{
    setLoading("It's taking longer than expected")
   },40000)

   return ()=>{
    clearTimeout(timeOut1)
    clearTimeout(timeOut2)
    clearTimeout(timeOut3)
   }
  },[])
  
  return (
    
      <div className='loader_container'>
        <Spin  color="#BAFF39" className='spin'  duration="10s"/>
        <p className='text'>{loading}</p>
       </div>
  
  )
}

export default Loader;
