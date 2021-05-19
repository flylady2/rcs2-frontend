import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import {fetchSurveys} from '../actions/fetchSurveys'
import Survey from '../components/Survey';


class SurveyResponsesContainer extends React.Component {

  componentDidMount() {

    this.props.fetchSurveys()

  }

  render() {


    return (
      <div>


          <Route path='/surveys/:name' render={(routerProps) =>
            <Survey {...routerProps} surveys={this.props.surveys}/>}/>

      </div>
    )
  }
}


    const mapStateToProps = state => {
      return {
        surveys: state.surveys
      }
    }


export default connect(mapStateToProps, {fetchSurveys})(SurveyResponsesContainer)
