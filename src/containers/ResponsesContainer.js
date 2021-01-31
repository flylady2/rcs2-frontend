import React from 'react';
import ResponseInput from '../components/ResponseInput';
import Responses from '../components/Responses';
import {Route} from 'react-router-dom';

class ResponsesContainer extends React.Component {

  render() {
    return (
      <div>
        <Route path='/responses/new' render={(routerProps) =>
        <ResponseInput {...routerProps} survey={this.props.survey}/>}/>
        <Responses responses={this.props.survey && this.props.survey.relationships.responses}/>
      </div>

    )
  }

}
export default ResponsesContainer;
//<Link to={`/surveys/${survey.id}`}>{survey.attributes.name}</Link>
