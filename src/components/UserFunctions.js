import React from 'react';

import {MultipleEmailsForm} from '../components/MultipleEmailsForm';
import Responses from '../components/Responses';
import {ResponseNumber} from '../components/ResponseNumber';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, NavLink, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchResponses} from '../actions/fetchResponses'

class UserFunctions extends React.Component {
  componentDidMount() {

    this.props.fetchResponses()

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


      </Router>
      </div>
    )
  }
}

    const mapStateToProps = state => {
      return {
        responses: state.responses
      }
    }
export default connect (mapStateToProps, {fetchResponses})(UserFunctions);
