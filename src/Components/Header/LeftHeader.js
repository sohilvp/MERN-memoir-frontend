import React, { useContext } from 'react'
import Post from '../Post/Post'
import { FetchContext } from '../../context/ContextApi';

const LeftHeader = () => {
  const { posts } = useContext(FetchContext);

  return (
    <div className="header__left">
        <h2 className='topic'>Top Stories</h2>
       {posts.map(post=>{
       return <Post post={post} key={post._id}/>
       }).slice(posts.length-5,posts.length-1).reverse()}
      </div>
  )
}

export default LeftHeader