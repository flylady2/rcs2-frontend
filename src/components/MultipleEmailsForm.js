import React from 'react';
import { useState } from 'react';
import {sendEmails} from '../actions/sendEmails';

function MultipleEmailsForm(props) {

  const survey_name = props.survey.attributes.name
  const response_link = `http://localhost:3001/surveys/${props.survey.attributes.name}/responses/new`

  const blankEmail = {email: ''};

  const [emailState, setEmailState] = useState([
    {email: ''}
  ]);

  const addEmail = () => {
    setEmailState([...emailState, {...blankEmail}]);
  };

  const handleEmailChange = (e) => {
    const updatedEmails = [...emailState];
    updatedEmails[e.target.dataset.idx][e.target.className] = e.target.value;
    setEmailState(updatedEmails);
  };
  //const [respondentEmail, setRespondentEmail] = useState();
  const handleSubmit = (e) => {
    emailState.map((emailObj) => {
      sendEmails({
        email: emailObj.email,
        survey_name: survey_name,
        response_link: response_link

      })
    })
  //  sendEmails({
  //    respondent_email: respondentEmail,
  //    survey_name: survey_name,
  //    response_link: response_link

  //  })
  //  e.preventDefault();
  }

  return (
    <form onSubmit={e => {handleSubmit(e)}}>
      <input type="button" value="Add email" onClick={addEmail}/>

    {
      emailState.map((val, idx) => {
        const emailId = `email-${idx}`;
        return (
          <div key={`email-${idx}`}>
          <label htmlFor={emailId}>{`Email #${idx + 1}`}</label>
          <input type="email" name={emailId} data-idx={idx} className="email" onChange={handleEmailChange}/>
        </div>
      );
      })
      }
      <input type="submit" value="Submit" />
    </form>

  )
}
export default MultipleEmailsForm;
