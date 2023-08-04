import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error_container'>
      <h1>404 | PAGE NOT FOUND</h1>
      <button><Link to={'/'}>Back to home</Link></button>
    </div>
  )
}

export default Error
