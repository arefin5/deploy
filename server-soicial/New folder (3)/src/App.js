import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import { UserProvider } from "./context";
import Navs from './components/Nav'
function App() {
  // const [state, setState] =
  return (
    <UserProvider>
      <BrowserRouter>
      <Navs />
        <Main />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
