import { useContext } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useHistory,Link } from "react-router-dom";
import { UserContext } from "../../context";
import { imageSource } from "../../functions";

const People = ({ people, handleFollow, handleUnfollow }) => {
  const [state] = useContext(UserContext);

  const router = useHistory();

  return (
    <>
      {/* <pre>{JSON.stringify(people, null, 4)}</pre> */}
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={imageSource(user)} />}
              title={
                <div className="d-flex justify-content-between">
                  <Link to={`/user/${user.username}`}>
                    <a>{user.username}</a>
                  </Link>
                  {state &&
                  state.user &&
                  user.followers &&
                  user.followers.includes(state.user._id) ? (
                    <span
                      onClick={() => handleUnfollow(user)}
                      className="text-primary pointer"
                    >
                      Unfollow
                    </span>
                  ) : (
                    <span
                      onClick={() => handleFollow(user)}
                      className="text-primary pointer"
                    >
                      Follow
                    </span>
                  )}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default People;
