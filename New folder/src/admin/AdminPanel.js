import React from "react";
import "./AdminPanel.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/constant";
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Post from "./QuestionList";
const AdminPanel = () => {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 ps-0">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="dashboard">
              <div className="dashboard-container">
              <div className="all-student">
                  <EmojiPeopleIcon/>
                  <span>Total Students</span>
                  <h3 style={{color:"#fff",textAlign:"center"}}>2</h3>
              </div>
              <div className="all-teacher">
                  <PeopleIcon/>
                  <span>Total Teacher</span>
                  <h3 style={{color:"#fff",textAlign:"center"}}>3</h3>
              </div>
              <div className="all-courses">
                <AssignmentIcon/>
                <span>All Courses</span>
                <h3 style={{color:"#fff",textAlign:"center"}}>5</h3>
              </div>
              <div className="all-questions">
                <HelpIcon/>
                <span>All questions</span>
                <h3 style={{color:"#fff",textAlign:"center"}}>6</h3>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* question: */}

    </>
  );
};

export default AdminPanel;
/*
{posts.map((post) => (
                    <div key={post._id} >
                      {/* <Link to={`/post/view/${post._id}`}> */
                  //     <Post key={post._id} post={post} handleDelete={handleDelete}/>
                  //     {/* </Link> */}
                  //   </div>
                  // ))}

