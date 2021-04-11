import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import UserSurvey from './UserSurvey';





const UserSurveys = (props) => {


//debugger;
  console.log(props)
  return (
    <div>
      <div>
        {props.surveys && props.surveys.map(survey =>
          <li key={survey.id} >
          <NavLink exact to={`/user/surveys/${survey.attributes.name}`}>{survey.attributes.name} </NavLink>
          </li>)}
      </div>
      <br></br>
      <div>
        <NavLink exact to={`/user/surveys/new`}>Create a new survey</NavLink>
        <Route exact path={`/user/surveys/new`} />
      </div>
    </div>
  )
}
export default UserSurveys;
