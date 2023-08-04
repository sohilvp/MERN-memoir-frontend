import React, { useContext } from 'react'
import { FetchContext } from '../../context/ContextApi'
import SectionPost from '../SectionPost/SectionPost'

const CenterBottom = () => {
    const {posts} =useContext(FetchContext)

  return (
    <div className="coverpost__bottom">
        {posts.map((post)=>{
       return <SectionPost posts={post} key={post._id}/>
       }).slice(0,3)}
        </div>
  )
}

export default CenterBottom