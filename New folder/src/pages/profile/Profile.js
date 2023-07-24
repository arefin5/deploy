import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../context";
import { RollbackOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const Profile = () => {
  // const { user } = useUserContext();
  const use=localStorage.getItem("auth");

const userData=JSON.parse(use);
const user=userData.user;
  console.log(user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return;
  }, [user]);
  // console.log(user);

  return (
    <div className="container-fluid">
      <div className="row py-5">
        <div className="col text-center">
          <h1>Profile</h1>
        </div>
        <div className="row py-5">
          <div className="col-md-6 offset-md-3">
            {user === null ? (
              <>
                                          <SyncOutlined spin   className="d-flex justify-content-center display-1 text-primary p-5" />

                {/* {console.log("profile page")} */}
                {/* navigate("/") */}
              </>
            ) : (
              <>
                <div className="pt-5 pb-5">
                  <Card>
                    <p className="text-muted">
                      Student Name:{user.fname }
                    </p>

                    <div className="d-flex">Blod Group:{user.blood}</div>
                    <div className="d-flex">
                      Registrattion Number:{user.registrationCode}
                    </div>
                    <div className="d-flex">
                        Email:{user.email}
                    </div>
                    <div className="d-flex">

                       Rool: {user.rool}
                    </div>
                    <div className="d-flex">
                        Phone:{user.phone}
                    </div>
                    <div className="d-flex">
                        Exam-Year:{user.year}
                    </div>
                    <div className="d-flex">
                      
                    </div>
                  </Card>

                  {/* <Link href="/user/dashboard">
          <a className="d-flex justify-content-center pt-5">
            <RollbackOutlined />
          </a>
        </Link> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
