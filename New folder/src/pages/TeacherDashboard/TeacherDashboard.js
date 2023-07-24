import React, { Fragment } from 'react';
import './TeacherDashboard.css';
import TeacherProfile from '../../images/teacher.png';
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';


const TeacherDashboard = () => {



  return (
    <Fragment>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 ps-0'>
                    <div className='teacher-sidebar'>
                        <div className='profile-container'>
                            <img  src={TeacherProfile} alt="teacher profile"/>
                            <h4>Sujan Mia</h4><span>(Teacher)</span>
                        </div>
                        <div className='link-container'>
                            <div>
                                <DashboardIcon/>
                                <Link to="/teacher/dashboard" >Dashboard</Link>
                            </div>
                            <div>
                                <AssignmentIcon/>
                                <Link to="/teacher/dashboard" >Exam</Link>
                            </div>
                            <div>
                                <HelpIcon/>
                                <Link to="/teacher/dashboard" >Question</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <div className='teacher-container'>
                        <div className='add-question'>
                            <AddIcon/>
                            <span>Add Question</span>
                        </div>


                        <div className='view-question'>
                            <VisibilityIcon/>
                            <span>View Question</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default TeacherDashboard