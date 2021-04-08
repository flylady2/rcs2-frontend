import React from 'react';
import {ResponseNumber} from '../components/ResponseNumber';
import {MultipleEmailsForm} from '../components/MultipleEmailsForm';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, NavLink, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSurveys} from '../actions/fetchSurveys';
import UserFunctions from '../components/UserFunctions';
import UserSurveys from '../components/UserSurveys';
import UserSurvey from '../components/UserSurvey';
import NewSurveyInput from '../components/NewSurveyInput';

class UserFunctionsContainer extends React.Component {

  componentDidMount() {

    this.props.fetchSurveys()

  }


  render() {

    //debugger;
    //let survey = this.props.survey
    return (
      <div>
      <Switch>

        <Route path='/user/surveys/new' component={NewSurveyInput}/>


        <Route path='/user/surveys/:name' render={(routerProps) =>
          <UserSurvey {...routerProps} surveys={this.props.surveys}/>}/>

        <Route path='/user/surveys' render={(routerProps) =>
          <UserSurveys {...routerProps} surveys={this.props.surveys}/>}/>



      </Switch>
    </div>
    )
  }
}

    const mapStateToProps = state => {
      return {
        surveys: state.surveys
      }
    }
export default connect (mapStateToProps,{fetchSurveys})(UserFunctionsContainer);
