import React from 'react';
import NewResponseInput from '../components/NewResponseInput';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';



class ResponsesContainer extends React.Component {



  render() {
    let survey = this.props.survey && this.props.survey

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


export default ResponsesContainer;
