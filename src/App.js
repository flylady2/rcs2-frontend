import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SurveyResponsesContainer from './containers/SurveyResponsesContainer';
import UserFunctionsContainer from './containers/UserFunctionsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';




class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <SurveyResponsesContainer/>
          <UserFunctionsContainer/>
        </div>
      </Router>
    );
  }
}


export default App;
