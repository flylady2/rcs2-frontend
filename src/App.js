import React from 'react';

//import {connect} from 'react-redux';
import SurveysContainer from './containers/SurveysContainer';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
//import Surveys from './components/Surveys';
//import Survey from './components/Survey';
//import SurveyInput from './components/SurveyInput';

//import {fetchLoggedInUser} from './actions/fetchLoggedInUser';




class App extends React.Component {






  render() {
    return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/*}<Link className="navbar-brand" to{"/signup"}>Sign up</Link>*/}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/*<Route exact path='/surveys'> <SurveysContainer /> </Route>*/}
                <Route exact path='/'><LoginForm /> </Route>
                <Route path='/login'> <LoginForm /> </Route>
                <Route path='/signup'> <SignupForm /> </Route>
                <div><SurveysContainer/></div>

                </Switch>
              </div>
            </div>
        </div>
      </Router>

    );
  }
}


export default App;
