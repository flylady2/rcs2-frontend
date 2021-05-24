import React from 'react';

import {MultipleEmailsForm} from '../components/MultipleEmailsForm';
import {Route, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteSurvey} from '../actions/deleteSurvey';
import {ResponseNumber} from './ResponseNumber';

class UserFunctions extends React.Component {


  handleOnClick = () => {

    this.props.deleteSurvey({id: this.props.survey.id});

  }


  render() {
    let survey = this.props.survey

    return (
      <div>

        {survey && <NavLink exact to={`/user/surveys/${survey.attributes.name}/responses`}>See how many responses this survey has</NavLink>}
        <br></br>

        {survey && <NavLink to={`/user/surveys/${survey.attributes.name}/responses/emails`}>Email Respondents</NavLink>}



        {survey && <Route exact path={`/user/surveys/${survey.attributes.name}/responses`}
        render={(routerProps) =>
        <ResponseNumber {...routerProps} survey={survey} />} />}
        <br></br>


        {survey && <Route exact path={`/user/surveys/${survey.attributes.name}/responses/emails`} render={(routerProps) =>
        <MultipleEmailsForm {...routerProps} survey={survey} />} />}
        <br></br>


        <br></br>
        <button onClick={this.handleOnClick}>
          Delete this survey
        </button>
      </div>
    )
  }
}


export default connect (null, {deleteSurvey})(UserFunctions);
