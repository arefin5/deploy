import React, { Fragment } from 'react';
import './StudentDash.css';
import { Link } from 'react-router-dom';
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from '@material-ui/icons/Assignment';
import HighlightIcon from '@material-ui/icons/Highlight';
import studentImg from '../../images/student.png';

const StudentDash = () => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12 ps-0 text-center'>
            <div className='student-sidebar'>
            <div className='student-container'>
              <div className='student-profile-container'>
                  <img  src={studentImg} alt="student profile"/>
                  <h4></h4><span>(student)</span>
              </div>
              <div className='student-link-container'>
                <div className='dash'>
                    <DashboardIcon/>
                    <Link to="/student/dashboard" >Dashboard</Link>
                </div>
                {/* quiz page start */}

                <div>
                    <AssignmentIcon/>
                    <Link  to="/exam" >Exam</Link>
                </div>
                <div>
                    <HighlightIcon/>
                    <Link to="/student/dashboard" className='text-center' >marks</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className='col-lg-9'>
              
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default StudentDash