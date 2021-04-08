import React from 'react';
import ResponsesContainer from '../containers/ResponsesContainer';
import {Route, Link, Switch} from 'react-router-dom';
import ResponseInput from './ResponseInput';
import UserFunctionsContainer from '../containers/UserFunctionsContainer';
import {BrowserRouter as Router} from 'react-router-dom';


const Survey = (props) => {


  //debugger;
   let survey = props.surveys && props.surveys.find(survey => survey.attributes.name == props.match.params.name)


  let choices = survey && survey.attributes.choices

  return (
    <div>
      <h2>
        {survey ? survey.attributes.name : null}
      </h2>
      <h3>
        {choices && choices.map(choice =>
          <li key={choice.id}> {choice.content}</li>)}
      </h3>


      <UserFunctionsContainer survey={survey}/>
      <ResponsesContainer survey={survey}/>


    </div>


  )
}

export default Survey;
//<ResponseInput {...routerProps} survey={survey} />} />}
//<ResponsesContainer survey={survey}/>
