import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import Survey from './Survey';
import ResponsesContainer from '../containers/ResponsesContainer';

import ResponseInput from './ResponseInput';


const Surveys = (props) => {


//debugger;
  console.log(props)
  return (
    <div>
      {props.surveys && props.surveys.map(survey =>
        <li key={survey.id} >
          <NavLink exact to={`/surveys/${survey.attributes.name}`}>{survey.attributes.name} </NavLink>


      </li>)}



    </div>
  )
}
export default Surveys;
