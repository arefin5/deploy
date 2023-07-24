import React, { useState } from 'react'
import { useUserContext } from "../../context";
import "./User.css"
import axios from "axios";
import { useNavigate } from 'react-router';
import {BaseUrl} from '../../utils/constant'
import { STUDENT_SETUP } from '../../actions/actionTypes';
import WebcamStreamCapture from './WebCamera';
// import WebCamera  from './WebCamera';
// import Video from './Video';

const User = () => {
  const {user, dispatch} = useUserContext()
  // state
 const [name, setName] = useState("");
 const [roll, setRoll] = useState("");
 const [category, setCategory] = useState("");
 const [loading,setLoading] = useState(false);

const   navigator=useNavigate() 

const formSubmitHandler = async (e) => {
  e.preventDefault();

  try {
    if (user.user && user.user._id) {
      const _id = user.user._id;
      const { data } = await axios.post(BaseUrl + "/create-student", {
        name,
        roll,
        category,
        _id,
      });
      
      if (data.error) {
        console.log("error");
      } else {
        dispatch({
          type: STUDENT_SETUP,
          payload: data.student,
        });
        
        // Save in local storage
        window.localStorage.setItem("students", JSON.stringify(data));
        // Redirect to quiz
        navigator("/quiz");
      }
    } else {
      console.log("User object or _id property is undefined");
    }
  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row py-5">
          <div className="col text-center">
            <h2>Setup your information</h2>
            <div className='setupform p-3'>
            {/* <WebCamera /> */}
                <div className='vid'>
                <WebcamStreamCapture />
                </div>
                   
              
            {/* <VideoRecorder /> */}
              <form onSubmit={formSubmitHandler}>
                <input className='form-control m-2' type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
                <input className='form-control m-2' type="text" name='roll' value={roll} onChange={(e)=>setRoll(e.target.value)} placeholder='Enter roll'/>
                <select className='form-control m-2' name='category' value={category} onChange={(e)=>setCategory(e.target.value)} >
                  <option  value="mcq">mcq</option>
                  <option  value="multiple">multiple</option>
                </select>
                <button disabled={!name || !roll || !category} className='btn btn-primary m-2' type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default User