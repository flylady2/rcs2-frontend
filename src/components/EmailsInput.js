import React from 'react';
import { useState } from 'react';
import {sendEmails} from '../actions/sendEmails';

function EmailsInput(props) {

  const survey_name = props.survey.attributes.name
  const response_link = `http://localhost:3001/surveys/${props.survey.attributes.name}/responses/new`
  const [respondentEmail, setRespondentEmail] = useState();
  const handleSubmit = (e) => {
    sendEmails({
      respondent_email: respondentEmail,
      survey_name: survey_name,
      response_link: response_link

    })
    e.preventDefault();
  }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <label>Respondent Emails:</label>
      <input name="respondentEmail" type="email" value={respondentEmail} onChange={e => setRespondentEmail(e.target.value)}/>



      <input type="submit"></input>
    </form>

  )
}
export default EmailsInput;
