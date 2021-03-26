import React from 'react';
import ResponseInput from '../components/ResponseInput';
import ResponseEmailsInput from '../components/ResponseEmailsInput';
import Responses from '../components/Responses';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchResponses} from '../actions/fetchResponses'

class ResponsesContainer extends React.Component {
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
          {survey && <Link to={`/surveys/${survey.attributes.name}/responses/new`}>Create a Response</Link>}
          {survey && <Route path={`/surveys/${survey.attributes.name}/responses/new`}
            render={(routerProps) =>
          <ResponseInput {...routerProps} survey={survey} />} />}
          {survey && <Link to={`/surveys/${survey.attributes.name}/responses/emails`}>Email Respondents</Link>}
            {survey && <Route path={`/surveys/${survey.attributes.name}/responses/emails`}
              render={(routerProps) =>
            <ResponseEmailsInput {...routerProps} survey={survey} />} />}
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
export default connect (mapStateToProps, {fetchResponses})(ResponsesContainer);
