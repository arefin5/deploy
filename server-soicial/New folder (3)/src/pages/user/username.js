import { matchPath } from "react-router";

import { useContext, useState, useEffect } from "react";
import { Avatar, Card } from "antd";
import moment from "moment";
import { UserContext } from "../../context";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import {Link,useParams } from 'react-router-dom'
const { Meta } = Card; // <Card.Meta>


const Username = () => {
  const [state, setState] = useContext(UserContext);
  // state
   const [user, setUser] = useState({});
   const { username } = useParams();

 
  useEffect(() => {
    if (username) fetchUser();
  

  }, [username]);
//  useEffect(() => {
//   fetchUser();
//  },[])
  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/user/${username}`);
        // console.log("router.query.username => ", data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return "/images/logo.png";
    }
  };

  return (
    <div className="row col-md-6 offset-md-3">
      {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}

      <div className="pt-5 pb-5">
        <Card hoverable cover={<img src={imageSource(user)} alt={user.name} />}>
          <Meta title={user.name} description={user.about} />

          <p className="pt-2 text-muted">
            Joined {moment(user.createdAt).fromNow()}
          </p>

          <div className="d-flex justify-content-between">
            <span className="btn btn-sm">
              {user.followers && user.followers.length} Followers
            </span>

            <span className="btn btn-sm">
              {user.following && user.following.length} Following
            </span>
          </div>
        </Card>

        <Link to="/user/dashboard">
          <a className="d-flex justify-content-center pt-5">
            <RollbackOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Username;
