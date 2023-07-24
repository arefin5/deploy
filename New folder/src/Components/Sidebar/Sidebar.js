import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css";
import AdminImg from '../../images/admin.png';
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
const Sidebar = () => {
  return (
      <>
        <div className='sidebar'>
            <div className='img-container text-center'>
                <img src={AdminImg} alt="admin avatar" />
            </div>
            <div className='sidebar-container'>
                <div>
                    <DashboardIcon/>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </div>
                <div>
                    <PeopleIcon/>
                    <Link to="">Teacher</Link>
                </div>
                <div>
                    <EmojiPeopleIcon/>
                    <Link to="/admin/dashboard/students">Students List</Link>
                </div>
                <div>
                    <AssignmentIcon/>
                    <Link to="/admin/dashboard/">Course</Link>
                </div>
                <div>
                    <HelpIcon/>
                    <Link to="/admin/dashboard/create/question">Create Question</Link>
                </div>
                {/* View Question */}
                <div>
                    <HelpIcon/>
                    <Link to="/admin/dashboard/question/list">All Question</Link>
                </div>
            </div>
        </div>
      </>
  )
}

export default Sidebar