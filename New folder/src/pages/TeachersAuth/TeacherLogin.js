import React, { Fragment } from 'react'
import { useState} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import './TeacherLogin.css'
import { useUserContext } from '../../context'
import { BaseUrl } from '../../utils/constant';
import { USER_SIGNIN } from '../../actions/actionTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signinTable from '../../images/signinTable.png'
const TeacherLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {state, dispatch} = useUserContext()
    const navigate = useNavigate();
    // console.log(props.history.location)
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email, password)
        try {
            // console.log( email, password);
            setLoading(true);
            const { data } = await axios.post(BaseUrl+`/teacher-login`, {
                email,
                password,
            });
            if (data.error) {
                // console.log();
                window.alert("Eamil or password is not correct")
                toast.error("Please try again");
            } else {
                window.alert("Login Successful")
                toast.success("Login Successful");
                // update context
                dispatch({type:USER_SIGNIN,payload:{
                    user: data.user,
                    token: data.token,
                }});
                // save in local storage
                window.localStorage.setItem("auth", JSON.stringify(data));
                navigate("/teacher/dashboard");
            }
        } catch (err) {
            // toast.error(err.response.data);
            setLoading(false);
        }
    };
    // if (state && state.token && state.user && user.role==="Teacher" ) navigate("/student/dashboard")
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 teacherlogin-box'>
                        <div className='teacherlogin_text'>
                           <h2>One of us?</h2>
                            <p>Lorem ipsum doller site emmet</p>
                            <Link to="/teacher/signup" style={{width:"80px",border:"1px solid #fff",borderRadius:"10px",margin:"0 auto",zIndex:"9999px",padding:"5px"}}>sign up</Link>
                        </div>
                        <div className='teacherloginimgBox'>
                            <img  src={signinTable} alt="leaner table"/>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='teacherloginform'>
                            <h2>Teacher Sign in</h2>
                            <form onSubmit={handleSubmit} >
                                <input
                                    className='form-control m-2'
                                    type="text"
                                    placeholder='enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input className='form-control m-2' type="password"
                                    placeholder='enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='btn btn-success' style={{background:"#0A192F"}}>sign in</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeacherLogin