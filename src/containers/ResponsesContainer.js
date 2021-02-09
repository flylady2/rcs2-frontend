import React from 'react';
import ResponseInput from '../components/ResponseInput';
import Responses from '../components/Responses';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, Switch} from 'react-router-dom';

class ResponsesContainer extends React.Component {


  render() {
    let survey = this.props.survey && this.props.survey
    //debugger;
    //let survey = this.props.survey
    return (
      <div>
        <Router>
          {survey && <Link to={`/surveys/${survey.id}/responses/new`}>Create a Response</Link>}
          {survey && <Route path={`/surveys/${survey.id}/responses/new`}
            render={(routerProps) =>
          <ResponseInput {...routerProps} survey={survey} />} />}



      </Router>
        //ResponsesContainer - {this.props.survey && this.props.survey.attributes.name}
      </div>

          //<Link to={`/surveys/${survey.id}/responses/new`}>Create a Response</Link>
          //<Route path='/surveys/:id/responses/new' render={(routerProps) =>
          //  <ResponseInput {...routerProps} survey={props.survey} />} />



    )
  }

}
export default ResponsesContainer;
//<Link to={`/surveys/${survey.id}`}>{survey.attributes.name}</Link>

//<Route path='/surveys/:id/responses/new' render={(routerProps) =>
//<ResponseInput {...routerProps} survey={this.props.survey}/>}/>
//<Responses responses={this.props.survey && this.props.survey.relationships.responses}/>
