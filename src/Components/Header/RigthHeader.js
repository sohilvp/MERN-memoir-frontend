import React, { useContext } from 'react'
import { FetchContext } from '../../context/ContextApi';
import Post from '../Post/Post'

const RigthHeader = () => {
  const { posts } = useContext(FetchContext);

  return (
    <div className="header__right">
      <h2 className='topic'>Recent posts</h2>
        {posts.map((post)=>{
        return <Post post={post} key={post._id}/>
        }).splice(0,4)}
        </div>
  )
}

export default RigthHeader