// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useHistory} from "react-router-dom"
// import { SyncOutlined } from "@ant-design/icons";
// import { UserContext } from "../../context";

// const AdminRoute = ({ children }) => {
//   const [ok, setOk] = useState(false);
//   const router = useHistory();
//   const [state] = useContext(UserContext);

//   useEffect(() => {
//     if (state && state.token) getCurrentAdmin();
//   }, [state && state.token]);

//   const getCurrentAdmin = async () => {
//     try {
//       const { data } = await axios.get(`/current-admin`);
//       console.log("data",data);
//       if (data.ok) setOk(true);
//     } catch (err) {

//       // router.push("/");
//     }
//   };

//   process.browser &&
//     state === null &&
//     setTimeout(() => {
//       getCurrentAdmin();
//     }, 1000);

//   return !ok ? (
//     <SyncOutlined
//       spin
//       className="d-flex justify-content-center display-1 text-primary p-5"
//     />
//   ) : (
//     <> {children}</>
//   );
// };

// export default AdminRoute;
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";
import { UserContext } from "../../context";

const AdminRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useHistory();
  const [state] = useContext(UserContext);

  useEffect(() => {
    if (state && state.token) getCurrentAdmin();
  }, [state && state.token]);

  const getCurrentAdmin = async () => {
    try {
      const { data } = await axios.get(`/current-admin`);
      if (data.ok) setOk(true);
    } catch (err) {
      router.push("/");
    }
  };
console.log("admin route",ok)
  process.browser &&
    state === null &&
    setTimeout(() => {
      getCurrentAdmin();
    }, 1000);

  return !ok ? (
    <SyncOutlined
      spin
      className="d-flex justify-content-center display-1 text-primary p-5"
    />
  ) : (
    <> {children}</>
  );
};

export default AdminRoute;

