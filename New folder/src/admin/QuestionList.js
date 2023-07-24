import { useContext, useState, useEffect } from "react";
import {
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../context";
import { BaseUrl } from "../utils/constant";
import axios from "axios";
import Sidebar from "../Components/Sidebar/Sidebar";

const QuestionList = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fechPost();
  }, []);
  const fechPost = async () => {
    try {
      const { data } = await axios.get(BaseUrl + "/get-all-posts");
      setPost(data);
    } catch (err) {}
  };

  //   handle delete question:
  const handleDelete = async (post) => {
    try {
      const answer = window.confirm("Are you sure?");
      if (!answer) return;
      const { data } = await axios.delete(
        BaseUrl + `/delete-question/${post._id}`
      );
      fechPost();
    } catch (err) {
      console.log(err);
    }
  };

  //   const router = useHistory();
  const navigate = useNavigate();
  console.log(posts);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 ps-0">
          <Sidebar />
        </div>
        <div className="col-lg-9 ">
          <>
            {posts.map((post) => (
              <>
                {post && (
                  <div key={post._id} className="card mb-5">
                    <div className="card-header">
                      <span
                        className="pt-2 ml-3"
                        style={{ marginLeft: "1rem" }}
                      >
                        {post.questionName}
                      </span>
                      <br />
                      {/* incorect option  */}

                      {post.incorrect_answer.map((item) => {
                        return (
                          <span
                            className="pt-2 ml-3"
                            style={{ marginLeft: "1rem" }}
                          >
                            incorect_answer: {item}
                          </span>
                        );
                      })}
                      {/* correct answer */}
                      <br />
                      <span
                        className="pt-2 ml-3"
                        style={{ marginLeft: "1rem" }}
                      >
                        answer :
                        <br />
                        {post.answer}
                      </span>

                      <span
                        className="pt-2 ml-3"
                        style={{ marginLeft: "1rem" }}
                      >
                        {/* {moment(post.createdAt).fromNow()} */}
                      </span>
                      {/*  */}
                    </div>
                    <div className="card-footer">
                      <div className="d-flex pt-2">
                        <>
                       
                          <EditOutlined
                       
                            onClick={() => navigate(`/admin/dashboard/edit-question/${post._id}`)}
                            className="text-danger pt-2 h5 px-2 mx-auto"
                          />
                          <DeleteOutlined
                            onClick={() => handleDelete(post)}
                            className="text-danger pt-2 h5 px-2"
                          />
                        </>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
