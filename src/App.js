import React from 'react';
import {connect} from 'react-redux';
import SurveysContainer from './containers/SurveysContainer'




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

      </div>
    );
  }
}


export default App;
