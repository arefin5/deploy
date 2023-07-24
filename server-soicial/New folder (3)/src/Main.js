import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/user/dashboard'
import Profile from './pages/user/profile/update';
import Following from './pages/user/following' ;
import Username from './pages/user/username'
import Postid from './pages/user/post/Postid'
import SinglePost from './pages/post/view/SinglePost'
import Admin from './pages/admin/index'

const Main = () => {
  return (
    <div>
       <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/user/dashboard" exact component={Dashboard} />
            <Route path="/user/profile/update" exact component={Profile} />
            <Route path="/user/following" exact component={Following} />
            <Route path="/user/:username" exact component={Username} />
            <Route path="/user/post/:_id" exact component={Postid} />
            <Route path="/post/view/:_id" exact component={SinglePost}/>
            <Route path="/admin" exact component={Admin} />
            <Redirect from="/" to="/home" />
        </Switch>
    </div>
  )
}

export default Main
