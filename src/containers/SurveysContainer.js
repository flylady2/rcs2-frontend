import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchSurveys} from '../actions/fetchSurveys'
import Surveys from '../components/Surveys';
import Survey from '../components/Survey';

import UserFunctionsContainer from './UserFunctionsContainer';

class SurveysContainer extends React.Component {

  componentDidMount() {

    this.props.fetchSurveys()

  }

  render() {
    //debugger;

    return (
      <div>
        <Switch>


          <Route path='/surveys/:name' render={(routerProps) =>
            <Survey {...routerProps} surveys={this.props.surveys}/>}/>

          <Route path='/surveys' render={(routerProps) =>
            <Surveys {...routerProps} surveys={this.props.surveys}/>}/>



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


export default connect(mapStateToProps, {fetchSurveys})(SurveysContainer)
