import React from 'react';

import {Route, Link, Switch} from 'react-router-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import UserFunctions from '../components/UserFunctions';


const UserSurvey = (props) => {


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

      <UserFunctions survey={survey}/>


    </div>


  )
}

export default UserSurvey;
//<ResponseInput {...routerProps} survey={survey} />} />}
//<ResponsesContainer survey={survey}/>
