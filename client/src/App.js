import React from 'react'
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Register from './Auth/Register'
import Login from './Auth/Login'
import Dashboard from './Auth/Dashboard'
import courses from './Auth/courses';
import Landingscreen from './Auth/Landingscreen';

function App() {
  return (
    <BrowserRouter>
  
    <Switch>
      <Route exact path='/' component={Landingscreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path='/courses' component={courses} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
