import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import UserSurvey from './UserSurvey';





const UserSurveys = (props) => {


//debugger;
  console.log(props)
  return (
    <div>
      {props.surveys && props.surveys.map(survey =>
        <li key={survey.id} >
          <NavLink exact to={`/user/surveys/${survey.attributes.name}`}>{survey.attributes.name} </NavLink>


      </li>)}



    </div>
  )
}
export default UserSurveys;
