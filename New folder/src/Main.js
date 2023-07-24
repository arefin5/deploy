import { Fragment, useContext } from "react";
import { UserContext, UserProvider } from "./context";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import User from "./pages/User/User";
import Header from "./Layout/Header";
import Home from "./pages/HomePage/Home";
function Main() {
  const [state, setState] = useContext(UserContext);

  return (
          <Routes>
            {state && state.user ? (
              <>
                <Route exact path="/" element={<Home/>}/>
                <Route render={() => <Navigate to="/users/dashboard" />} />
              </>
            ) : (
              <>
                <Route exact path="/login" element={<AuthLogin />} />
                <Route exact path="/signup" element={<AuthSignup />} />
              </>
            )}
            {/* {state.user ? () => <Home /> : () => <AuthLogin />} */}
          </Routes>
      
      
  );
}

export default Main;
