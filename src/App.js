import React from 'react';
import SurveysContainer from './containers/SurveysContainer';
import UserFunctionsContainer from './containers/UserFunctionsContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SurveysContainer/>
        <UserFunctionsContainer/>

      </div>
    );
  }
}


export default App;
