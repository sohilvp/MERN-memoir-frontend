import React  from 'react'
import { Link } from 'react-router-dom'
import default_cover from '../../assets/default-cover.jpeg'
import './coverpost.css'
import {basetoString} from '../../fun/basetoString'


const CoverPost = ({post}) => {
  const {desc} =post
  const para = desc?.join('\n')
 
  return (
    
    <div className='coverpost_container'>
        <p className='cover_date'>{new Date(post.createdAt).toDateString()}</p>
        <div className='text'>
        <img className='cover_image' src={post.photo ?`data:image/png;base64,${basetoString(post.photo.data.data)}`:default_cover} alt="cover" />
        <Link to={`/posts/${post._id}`}>
        <h3 className='cover_title'>{post.title}</h3>
        </Link>
        </div>
        <p className="auther">-by {post.username}</p>
        <p className='description'>{para.length >100? para.substring(0,500)+"..." :para}</p>  
    </div>
    
  )
}

export default CoverPost