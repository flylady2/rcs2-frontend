import React from 'react';
import {Route, Link} from 'react-router-dom';
import Survey from './Survey';


const Surveys = (props) => {


  //debugger;
  console.log(props)
  return (
    <div>
      {props.surveys && props.surveys.map(survey =>
        <li key={survey.id}>
          <Link to={`/surveys/${survey.id}`}>{survey.attributes.name}</Link>
        </li>)}
    </div>
  )
}
export default Surveys;
//
