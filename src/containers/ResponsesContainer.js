import React from 'react';
import NewResponseInput from '../components/NewResponseInput';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchResponses} from '../actions/fetchResponses'

class ResponsesContainer extends React.Component {
  //componentDidMount() {

  //  this.props.fetchResponses()

  //}


  render() {
    let survey = this.props.survey && this.props.survey
    //debugger;
    //let survey = this.props.survey
    return (
      <div>
        <Router>

          {survey && <Route exact path={`/surveys/${survey.attributes.name}/responses/new`}
          render={(routerProps) =>
            <NewResponseInput {...routerProps} survey={survey} />} />}


      </Router>
      </div>
    )
  }
}

//    const mapStateToProps = state => {
//      return {
//        responses: state.responses
//      }
//    }
export default connect (null, {fetchResponses})(ResponsesContainer);
//<Route path='/user/surveys/new' component={NewSurveyInput}/>
