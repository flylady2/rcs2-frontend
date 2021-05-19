import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SurveyResponsesContainer from './containers/SurveyResponsesContainer';
import UserFunctionsContainer from './containers/UserFunctionsContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
