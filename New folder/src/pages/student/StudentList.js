import React from "react";
import { BaseUrl } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { SyncOutlined } from "@ant-design/icons";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, [students]);


  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(BaseUrl + "/get-all-student");
      setStudents(data);
      console.log(students.studentid);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(students.studentId)


  return (
    

    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-9 ">
           <div className="row">
           { students && students.length> 0 ? (

              <>
                  {students.map((student,index) => {
                    return (
                      <div key={index} className="col-md-3">
                        <div className="card mb-5">
                          <div className="card-body">
                            <h5 className="card-title">
                              Name : {student.name}
                            </h5>
                            {/* <p className="card-text text-dark">
                              Email:{student.studentId}
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
                 {/* {JSON.stringify(students)} */}
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;



// {
//   students.map((student)=>{
//     return (
//       <div  className="col-md-3">
//        <div className="card mb-5">
//        <div className="card-body">
//           <h5 className="card-title">Name : {student.name}</h5>
//           {/* <p className="card-text text-dark">Email:{student.studentId.email}</p> */}
//           <p className="card-text text-dark">Mark:{student.mark}</p>
//        </div>
//        </div>
//       </div>
//     )
//   }