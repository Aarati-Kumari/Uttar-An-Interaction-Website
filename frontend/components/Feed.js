import React, { useEffect, useState } from 'react'
import UttarBox from './UttarBox';
import "./css/Feed.css";
import Post from "./Post";
import axios from 'axios';


function Feed() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('/api/questions')
    .then((res)=>{
      console.log(res.data);
      setPosts(res.data)
    })
    .catch((e)=>{
      console.log(e);
    })

  },[])
  return (
    <div className='Feed'>
      <UttarBox/>
      {
        posts.map((post,index)=>(
        <Post key={index} post={post} />))
      }
      {/*<Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>*/}

    </div>
  )
}

export default Feed