import React from 'react';

import {MultipleEmailsForm} from '../components/MultipleEmailsForm';
import {ResponseNumber} from '../components/ResponseNumber';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteSurvey} from '../actions/deleteSurvey'

class UserFunctions extends React.Component {
  handleOnClick = () => {

    this.props.deleteSurvey({id: this.props.survey.id});


  }



  render() {
    let survey = this.props.survey && this.props.survey
    //debugger;
    //let survey = this.props.survey
    return (
      <div>
        <Router>
        {survey && <NavLink exact to={`/user/surveys/${survey.attributes.name}/responses`}>See how many responses this survey has</NavLink>}
        {survey && <Route path={`/user/surveys/${survey.attributes.name}/responses`}
        render={(routerProps) =>
          <ResponseNumber {...routerProps} survey={survey} />} />}
          <br></br>

        {survey && <NavLink to={`/user/surveys/${survey.attributes.name}/responses/emails`}>Email Respondents</NavLink>}
        {survey && <Route path={`/user/surveys/${survey.attributes.name}/responses/emails`}
        render={(routerProps) =>
        <MultipleEmailsForm {...routerProps} survey={survey} />} />}
          <br></br>

      </Router>
      <br></br>
      <button onClick={this.handleOnClick}>
      Delete this survey
    </button>
      </div>
    )
  }
}


export default connect (null, {deleteSurvey})(UserFunctions);
