import React from 'react';
import SurveysContainer from './containers/SurveysContainer';
import UserFunctionsContainer from './containers/UserFunctionsContainer';




class App extends React.Component {

//  componentDidMount() {
//    fetch(`http://localhost:3000/api/v1/surveys`)
//      .then(response => response.json())
//      .then(data => console.log(data))
//  };




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
