// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
// } from "reactstrap";

// import { Link, useNavigate } from "react-router-dom";
// import { useUserContext } from "../context/index";
// import { USER_SIGNOUT } from "../actions/actionTypes";
// const Header = () => {
//   const { user, dispatch } = useUserContext();
//   const [users,setUser]=useState(user);
//   //
//   const navigate = useNavigate();

//   const [navbarToggle, setNavbarToggle] = useState(false);
//   const navbarToggleHandler = () => {
//     setNavbarToggle({
//       navbarToggle: !navbarToggle,
//     });
//   };

//   useEffect(() => {

//     if (!user) {
//       navigate("/login");
//     }
//     setUser(user);
//   }, [user]);

//   const logout = () => {
//     localStorage.removeItem("auth");
//     localStorage.removeItem("student");
//     dispatch({ type: USER_SIGNOUT });
//     navigate("/login");
//   };

//   return (
//     <Navbar className="k" expand="md" style={{ background: "#0A192F" }}>
//       <NavbarToggler style={{ color: "black" }} onClick={navbarToggleHandler} />
//       <Nav className="mr-auto" navbar>
//       <NavItem className="nav-item">
//               <Link to="/" className="nav-link">
//                 Quiz App
//               </Link>
//             </NavItem>
//         </Nav>
//       <Collapse className="d-flex justify-content-end"  navbar isOpen={navbarToggle}>

//         <div >
//           <Nav navbar className="ml-auto ">
//             {/* <NavItem className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </NavItem> */}
            // {users && users.role === "Admin" ? (
            //   <>
            //     <NavItem className="nav-item">
            //       <Link to="/admin/dashboard" className="nav-link">
            //         Admin
            //       </Link>
            //     </NavItem>
            //     <NavItem className="nav-item ">
            //       <Link to="/teacher/dashboard" className="nav-link">
            //         Teacher
            //       </Link>
            //     </NavItem>
            //   </>
            // ) : null}
            // {users && users.role === "Teacher" ? (
            //   <>
            //     <NavItem className="nav-item">
            //       <Link to="/teacher/dashboard" className="nav-link">
            //         Teacher
            //       </Link>
            //     </NavItem>
            //   </>
            // ) : null}
//             {/* {user && user.role === "Subscriber" ? (
//             <>
//               <NavItem className="nav-item">
//                 <Link to="/reults" className="nav-link">
//                   Results
//                 </Link>
//               </NavItem>
//               <NavItem className="nav-item">
//                 <Link to="/student/dashboard" className="nav-link">
//                   Student Dashboard
//                 </Link>
//               </NavItem>
//             </>
//           ) : (
//             <></>
//           )} */}

//             {users && users.role === "Subscriber" ? (
//               <>
//                 <NavItem className="nav-item">
//                   <Link to="/reults" className="nav-link">
//                     Results
//                   </Link>
//                 </NavItem>
//                 <NavItem className="nav-item">
//                   <Link to="/student/dashboard" className="nav-link">
//                     Dashboard
//                   </Link>
//                 </NavItem>
//                 <NavItem className="nav-item">
//                   <Link to="/user/profile" className="nav-link">
//                     Profile
//                   </Link>
//                 </NavItem>
//               </>
//             ) : (
//               <></>
//             )}
//             {users ? (
//               <div
//                 className="log-out"
//                 style={{
//                   paddingTop: "5px",
//                   cursor: "pointer",
//                   color: "#fff",
//                   fontWeight: "bold",
//                   marginTop: "-2px",
//                 }}
//                 onClick={logout}
//               >
//                 LogOut
//               </div>
//             ) : (
//               <>
//                 <NavItem className="nav-item">
//                   <Link to="/signup" className="nav-link">
//                     Student
//                   </Link>
//                 </NavItem>
//                 <NavItem className="nav-item">
//                   <Link to="/teacher/signup" className="nav-link">
//                     Teacher
//                   </Link>
//                 </NavItem>
//               </>
//             )}
//           </Nav>
//         </div>
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;

import "./Header.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/index";
import { USER_SIGNOUT } from "../actions/actionTypes";
const Header = () => {
  const { user, dispatch } = useUserContext();
  //
  const navigate = useNavigate();

  const [navbarToggle, setNavbarToggle] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarToggle({
      navbarToggle: !navbarToggle,
    });
  };
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("student");
    dispatch({ type: USER_SIGNOUT });
    navigate("/login");
    console.log("logout");
  };
  return (
    <Navbar className="k" expand="md" style={{ background: "#0A192F" }}>
      <NavbarBrand>

      <Link to="/" className="nav-link">
      Quiz App
           </Link>
      </NavbarBrand>
      <NavbarToggler style={{ color: "black" }} onClick={navbarToggleHandler} />
      <Collapse navbar isOpen={navbarToggle}>
        <Nav navbar className="ms-auto">
          
        
         {
           user && user ?<>
           
          <NavItem className="nav-item">
            <Link to="/reults " className="nav-link">
              Results
            </Link>
          </NavItem>
          {/*  */}
          <NavItem className="nav-item">
            <Link to="/student/dashboard" className="nav-link">Student Dashboard</Link>
          </NavItem>
          {/* profile */}
          <NavItem className="nav-item">
            <Link to="/user/profile"  className="nav-link">
              Profile
            </Link>
          </NavItem>
          {user && user.role === "Admin" ? (
              <>
                <NavItem className="nav-item">
                  <Link to="/admin/dashboard" className="nav-link">
                    Admin
                  </Link>
                </NavItem>
                <NavItem className="nav-item ">
                  <Link to="/teacher/dashboard" className="nav-link">
                    Teacher
                  </Link>
                </NavItem>
              </>
            ) : null}
                        {user && user.role === "Teacher" ? (
              <>
                <NavItem className="nav-item">
                  <Link to="/teacher/dashboard" className="nav-link">
                    Teacher
                  </Link>
                </NavItem>
              </>
            ) : null}

          <div
                className="log-out"
                style={{
                  paddingTop: "5px",
                  cursor: "pointer",
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: "-2px",
                }}
                onClick={logout}
              >
                LogOut
              </div>


            </> : <>
            <NavItem className="nav-item">
              <Link to="/signup" className="nav-link">
                Student
              </Link>
            </NavItem>

            <NavItem className="nav-item">
              <Link to="/teacher/signup" className="nav-link">
                Teacher 
              </Link>
            </NavItem>
            </>
         } 
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
