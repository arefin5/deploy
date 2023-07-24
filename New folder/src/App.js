import { Fragment } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Layout/Header';
import Quiz from './pages/QuizPage/Quiz';
import StudentDash from './pages/student/StudentDash';
import User from './pages/User/User';
import AdminPanel from './admin/AdminPanel';
import CreateQuestion from './admin/CreateQuestion';
import Home from './pages/HomePage/Home';
import AuthLogin from './pages/StudentsAuth/AuthLogin';
import AuthSignup from './pages/StudentsAuth/AuthSignup';
import ProtectedRoute from './Components/routes/ProtectedRoutes';
import TeacherLogin from './pages/TeachersAuth/TeacherLogin';
import TeacherSignUp from './pages/TeachersAuth/TeacherSignUp';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';
import StudenList from './pages/student/StudentList';
import QuestionList from './admin/QuestionList';
import SingleQuestion from './admin/SingleQuestion'
import StudentResult from './pages/User/Result'
import Profile from './pages/profile/Profile';

function App() {
    return (
  
    <div className="unselectable">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={ <Home/>}/> 
          <Route exact path="/signup" element={<AuthSignup />} />
          <Route exact path="/login" element={<AuthLogin />} />
          <Route exact path="/teacher/signup" element={<TeacherSignUp />}/>
          <Route exact path="/teacher/login" element={<TeacherLogin />} />
          {/* <Route exact path="/student/dashboard" element={<ProtectedRoute>
            <StudentDash/>
          </ProtectedRoute>} /> */}
          {/* <Route exact path="/quiz" element={<ProtectedRoute>
            <Quiz/>
          </ProtectedRoute>} /> */}
          {/* <Route exact path="/exam" element={<ProtectedRoute>
            <User/>
          </ProtectedRoute>} /> */}
            <Route exact path="/quiz"  element={<Quiz />}/>
            <Route exact path="/exam"  element={<User/>} />
          <Route exact path="/admin/dashboard" element={
            <AdminPanel/>
          } />
          <Route
            exact
            path="/admin/dashboard/create/question"
            element={<CreateQuestion />}
            />
            <Route exact path="/teacher/dashboard" element={<TeacherDashboard/>} />
            <Route exact path="/student/dashboard" element={<StudentDash/>} />
            {/*  */}
            <Route exact path="/admin/dashboard/students" element={<StudenList/>} />
            <Route exact path="/admin/dashboard/question/list" element={<QuestionList/>} />
            <Route exact path="/admin/dashboard/edit-question/:id" element={ <SingleQuestion/>} />
            <Route exact path="/reults/" element={<StudentResult/>} />
            <Route exact path="/user/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </div>
 
  );
}

export default App;
