import React from 'react'
import ReactDOM from 'react-dom';

import {useState,useEffect} from 'react'
import axios from 'axios'
import ParallaxBG from './components/cards/ParallaxBG'
import { Link } from 'react-router-dom'
import PostPublic from "./components/cards/PostPublic";
const Home = () => {
  const [posts,setPost]=useState([])
useEffect(()=>{
  
      fechPost();
},[])
const fechPost=async()=>{
  try{
const {data} =await axios.get('/posts')
setPost(data)
  }catch(err){
  }
}
  return (
    <div>

      <ParallaxBG className="bg-default-image" url="./assest/images/default.jpg" />
      <div className="container">
        <div className="row pt-5">
          {posts.map((post) => (
            <div key={post._id} className="col-md-4">
              <Link to={`/post/view/${post._id}`}>
                  <PostPublic key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
