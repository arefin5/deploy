import React from "react";
import { BaseUrl } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useUserContext } from "../../context";
import { useParams } from 'react-router-dom';

import { SyncOutlined } from "@ant-design/icons";

const StudentResult = () => {
  const { user, dispatch } = useUserContext();
  const [students, setStudents] = useState([]);
  // const [id, setID] = useState(0);
  let { _id } = useParams(); 
// console.log(_id);

  // const [res, setResult] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, [students]);
  const fetchStudents = async () => {
    // let ids = await user._id;

    try {
      const { data } = await axios.get(BaseUrl + "/get-all-student");
      setStudents(data);
      // setID(ids);
      //   console.log(students);
    } catch (err) {
      console.log(err);
    }
  };
  // selfid=_id
  let result=students
// console.log(_id)
// console.log(students)
  // let result = students.filter((student) => {
  //   if (student.id === id) {
  //     // return result;
  //     console.log(student.result);

  //   } else {
  //     return null;
  //   }
  // });

  //  console.log("result",result)
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 ps-0"></div>
          <div className="col-lg-9 ">
            <div className="row">
            {/* <SyncOutlined spin   className="d-flex justify-content-center display-1 text-primary p-5" /> */}

              {user && result.length > 0 ? (
                <>
                  {result.map((student) => {
                    return (
                      <div key={student._id} className="col-md-3">
                        <div className="card mb-5">
                          <div className="card-body">
                            <h5 className="card-title">
                              Name : {student.name}
                            </h5>
                            {/* <p className="card-text text-dark">
                              Email:{student.studentId.email}
                            </p> */}
                            <p className="card-text text-dark">
                              Mark:{student.mark}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                            <SyncOutlined spin   className="d-flex justify-content-center display-1 text-primary p-5" />

                {/* <SyncOutlined spin className="py-2" /> */}
                  {/* <h1>You Have No result </h1> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentResult;
