import { useState, useEffect} from 'react'
import ParallaxBG from "../../../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../../../components/cards/PostPublic";
import {Link,useParams } from 'react-router-dom'


const SinglePost = () => {
   const [post,setPost]= useState([]);
   const {_id}=useParams();
useEffect(() => {
  if(_id) fetchPost(_id);
},[_id])
const fetchPost=async(_id)=>{
     try{
         const { data } = await axios.get(`/post/${_id}`)
         setPost(data);
     }catch (err) {
       console.log(err);
     }
}

  const imageSource = (post) => {
    if (post.image) {
      return post.image.url;
    } else {
      return "/images/default.jpg";
    }
  };

  return (
    <>
  
      <ParallaxBG url="/images/default.jpg" />

      <div className="container">
        <div className="row pt-5">
          <div className="col-md-8 offset-md-2">
            <PostPublic key={post._id} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};



export default SinglePost;
