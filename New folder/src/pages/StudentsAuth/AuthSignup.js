import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthSignup.css";
import axios from "axios";
import { useUserContext } from "../../context";
import { BaseUrl } from "../../utils/constant";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import learnerTable from "../../images/learnerTable.png";
import AuthForm from "./AuthForm";
const AuthSignup = () => {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [rool, setRool] = React.useState("");
  const [registrationCode, setRegNo] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [year, setYear] = React.useState("");
  const [blood, setbload] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { state } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   fname,
    //   lname,
    //   email,
    //   password,
    //   rool,
    //   registrationCode,
    //   phone,
    //   year,
    //   blood,
    //   gender
    // );
    try {
      const { data } = await axios.post(BaseUrl + `/register`, {
        fname,
      lname,
      email,
      password,
      rool,
      registrationCode,
      phone,
      year,
      blood,
      gender
      });

      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
        window.alert(data.error);
      } else {
        window.alert("Account Create Successful");

        // update context
        setEmail("");
        setPassword("");
        
        setLoading(false);
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };
  if (state && state.token) navigate("/");

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 bg-box">
            <div className="signup_text text-center">
              <h2>One of us?</h2>
              <p>Lorem ipsum doller site emmet</p>
              <Link
                to="/login"
                style={{
                  width: "80px",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  margin: "0 auto",
                  zIndex: "9999px",
                  padding: "5px",
                }}
              >
                sign in
              </Link>
            </div>
            <div className="imgBox">
              <img src={learnerTable} alt="leaner table" />
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="signupform">
              <h2>Student signup</h2>
              <AuthForm
                handleSubmit={handleSubmit}
                fname={fname}
                setFname={setFname}
                lname={lname}
                setLname={setLname}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
                rool={rool}
                setRool={setRool}
                registrationCode={registrationCode}
                setRegNo={setRegNo}
                phone={phone}
                setPhone={setPhone}
                year={year}
                setYear={setYear}
                blood={blood}
                setbload={setbload}
                gender={gender}
                setGender={setGender}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthSignup;
