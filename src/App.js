import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost';
import { FirebaseContext } from './store/Context'
import './App.css';
import {AuthContext} from './store/Context'
import Post from './store/PostContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/create" component={Create}/>
        <Route path="/viewpost" component={ViewPost}/> 
      </Router>
      </Post>
    </div>
  );
}

export default App;
