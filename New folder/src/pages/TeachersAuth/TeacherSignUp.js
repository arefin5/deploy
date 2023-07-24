import React, { Fragment } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./TeacherSignUp.css"
import axios from 'axios'
import { useUserContext } from '../../context'
import { BaseUrl } from '../../utils/constant'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import learnerTable from '../../images/learnerTable.png'
const TeacherSignUp = () => {
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const {state} = useUserContext();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(fname, lname, email, password)
        try {
            const { data } = await axios.post(BaseUrl+`/teacher-register`, {
              fname,
              lname,
              email,
              password
            });
      
            if (data.error) {
                console.log(data.error);
                toast.error(data.error);
                window.alert(data.error);
            } else {
                window.alert("Account Create Successful")
                // update context
              setEmail("");
              setPassword("");
              setLoading(false);
              navigate("//teacher/login");
            }
          } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
          }
    }
    if (state && state.token) navigate("/");
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 teacherbg-box'>
                        <div className='techersignup_text text-center'>
                            <h2>One of us?</h2>
                            <p>Lorem ipsum doller site emmet</p>
                            <Link to="/teacher/login" style={{width:"80px",border:"1px solid #fff",borderRadius:"10px",margin:"0 auto",zIndex:"9999px",padding:"5px"}}>sign in</Link>
                        </div>
                        <div className='techerimgBox'>
                            <img  src={learnerTable} alt="leaner table"/>
                        </div>
                    </div>
                    <div className='col-lg-6 text-center'>
                        <div className='teachersignupform'>
                            <h2>Teacher signup</h2>
                            <form onSubmit={handleSubmit}>
                                <input className='form-control m-2'
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    type="text"
                                    placeholder='first name'
                                />
                                <input className='form-control m-2'
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    type="text" placeholder='last name' />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='form-control m-2' 
                                    type="text"
                                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                    required
                                     placeholder='enter email' />
                                <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 className='form-control m-2' 
                                 type="password"
                                  placeholder='password'
                                   />
                                <button className='btn btn-success' style={{background:"#0A192F"}}>sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeacherSignUp