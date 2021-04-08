import React from 'react';
import {triggerCalculation} from '../actions/triggerCalculation';


export const ResponseNumber = (props) => {
  const handleSubmit = (e) => {
    triggerCalculation(props.survey)
    e.preventDefault();
  }
  //debugger;

  return (
    <div id="parent">
      <div id="link">
        <h3>The number of responses to the {props.survey.attributes.name} survey is {props.survey.relationships.responses.data.length}.</h3>
      </div>
      <div id="form">
        <form onSubmit={e => {handleSubmit(e)}}>
          <label>Trigger Calculation:</label>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  )
}
//export default ResponseNumber;
