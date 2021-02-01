import React from 'react';
import ResponsesContainer from '../containers/ResponsesContainer';
import {Route, Link, Switch} from 'react-router-dom';
import ResponseInput from './ResponseInput';
import {BrowserRouter as Router} from 'react-router-dom';


const Survey = (props) => {



  let survey = props.surveys && props.surveys.find(survey => survey.id == parseInt(props.match.params.id))
  //debugger;
  console.log(survey)

  let choices = survey && survey.attributes.choices
  console.log(choices)
  //props.surveys && props.surveys.map(
  //let survey = props.surveys.filter(survey => survey.id == props.match.params.id[0])
  //debugger;
  return (
    <div>
      <h2>
        {survey ? survey.attributes.name : null}
      </h2>
    <h3>
      {choices && choices.map(choice =>
        <li key={choice.id}> {choice.content}</li>)}
    </h3>

      <ResponsesContainer survey={survey}/>
    </div>


  )
}
export default Survey;
