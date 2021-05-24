import React from 'react';
import NewResponseInput from './NewResponseInput';
import {Route} from 'react-router-dom';


const Survey = (props) => {

   let survey = props.surveys && props.surveys.find(survey => survey.attributes.name === props.match.params.name)


  let choices = survey && survey.attributes.choices

  return (
    <div>
      <h2>
        {survey ? survey.attributes.name : null}
      </h2>
      <h3>
        {choices && choices.map(choice =>
          <li key={choice.id}> {choice.content}</li>)}
      </h3>


        {survey && <Route exact path={`/surveys/${survey.attributes.name}/responses/new`}
        render={(routerProps) =>
          <NewResponseInput {...routerProps} survey={survey} />} />}


    </div>


  )
}

export default Survey;
