import { Phone } from "@material-ui/icons";
import React from "react";

const AuthForm = ({
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
  rool,
  setRool,
  registrationCode,
  setRegNo,
  phone,
  setPhone,
  year,
  setYear,
  blood,
  setbload,
   gender,
   setGender
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control m-2"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        type="text"
        placeholder="first name"
      />

      <input
        className="form-control m-2"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        type="text"
        placeholder="last name"
      />
      
{/* rool */}
<input
        className="form-control m-2"
        value={rool}
        onChange={(e) => setRool(e.target.value)}
        type="number/text"
        placeholder="Enter Your Rool"
      />
      {/*  registration code*/}

      <input
        className="form-control m-2"
        value={registrationCode}
        onChange={(e) => setRegNo(e.target.value)}
        type="number/text"
        placeholder="Your Registration Number"
      />
      {/* year */}
      <input
        className="form-control m-2"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        type="number/text"
        placeholder="Year "
      />
      {/* Blood Group */}
      <input
        className="form-control m-2"
        value={blood}
        onChange={(e) => setbload(e.target.value)}
        type="number/text"
        placeholder="Your Blood Group "
      />
      {/*  */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control m-2"
        type="text"
        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        required
        placeholder="enter email"
      />
      {/* phone */}
      <input
        className="form-control m-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number/text"
        placeholder="Enter Valid Phone Number"
      />
      {/*Gender  */}
      <select className='form-control m-2' name='category' value={gender} onChange={(e)=>setGender(e.target.value)} >
                  <option  value="male">male</option>
                  <option  value="female">female</option>
                </select>
            {/* admition sl */}
      {/*  pass*/}
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control m-2"
        type="password"
        placeholder="password"
      />

      <button className="btn btn-success" style={{ background: "#0A192F" }}>
        sign up
      </button>
    </form>
  );
};

export default AuthForm;
