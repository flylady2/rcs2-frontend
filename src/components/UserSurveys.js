import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import  {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const UserSurveys = (props) => {

  return (
    <div>
      <div>
        <ListGroup variant="flush">
        {props.surveys && props.surveys.map(survey =>

          <ListGroup.Item key={survey.id}>
          <NavLink exact to={`/user/surveys/${survey.attributes.name}`}>{survey.attributes.name}</NavLink>
          </ListGroup.Item>
        )}
        </ListGroup>
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
