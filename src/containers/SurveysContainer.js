import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchSurveys} from '../actions/fetchSurveys'
import Surveys from '../components/Surveys';
import Survey from '../components/Survey';
import SurveyInput from '../components/SurveyInput';

class SurveysContainer extends React.Component {

  componentDidMount() {

    this.props.fetchSurveys()

  }

  render() {
    //debugger;

    return (
      <div>
        <Switch>

        <Route exact path='/surveys/new' component={SurveyInput}/>

        <Route exact path='/surveys/:id' render={(routerProps) =>
          <Survey {...routerProps} surveys={this.props.surveys}/>}/>

        <Route exact path='/surveys' render={(routerProps) =>
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
