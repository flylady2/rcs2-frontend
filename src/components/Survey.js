import React from 'react';
import ResponsesContainer from '../containers/ResponsesContainer';
import {Route, Link} from 'react-router-dom';
import ResponseInput from './ResponseInput';
import {BrowserRouter as Router} from 'react-router-dom';


const Survey = (props) => {



  let survey = props.surveys && props.surveys.find(survey => survey.id == parseInt(props.match.params.id))
  //debugger;
  console.log(survey)

  let choices = survey && survey.attributes.choices
  console.log(choices)
  //props.surveys && props.surveys.map(
  //let survey = props.surveys.filter(survey => survey.id == props.match.params.id[0])
  //debugger;
  return (
    <div>
      <h2>
        {survey ? survey.attributes.name : null}
      </h2>
    <h3>
      {choices && choices.map(choice =>
        <li key={choice.id}> {choice.content}</li>)}
    </h3>
    <Router>
      <Link to={'/responses/new'}>Create a Response</Link>
      <Route path='/responses/new' component={ResponseInput} />
    </Router>
      <ResponsesContainer survey={survey}/>
    </div>

      //  <div>
        //  {survey ? survey.attributes.choices.map(choice =>
          //  <li key={survey.id}><Survey {...choice.content} />
          //  </li>)}
      //  </div>


  )
}
export default Survey;
//{props.surveys && props.surveys.map(survey =>
//  <li key={survey.id}>
//    <Link to={`/surveys/${survey.id}`}>{survey.attributes.name}</Link>
  //</li>)}
