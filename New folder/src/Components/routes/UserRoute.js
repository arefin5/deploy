import React,{ useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";


import { SyncOutlined } from "@ant-design/icons";
import { useUserContext } from "../../context";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useNavigate();
  const {state} = useUserContext()

  

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/current-user`,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (data.ok) setOk(true);
    } catch (err) {
      router("/login");
    }
  };
  useEffect(() => {
    if (state && state.token) getCurrentUser();
  }, []);
  // process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentUser();
    }, 100);

  return ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <> {children}</>
  );
};

export default UserRoute;
