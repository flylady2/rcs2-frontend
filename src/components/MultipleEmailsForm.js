import React from 'react';
import { useState } from 'react';
import {sendEmails} from '../actions/sendEmails';

export function MultipleEmailsForm(props) {

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
    //const emailArray = []
    //debugger;
    const emailArray = emailState.map(emailObj => ({
      //emailArray.push({
        email: emailObj.email,
        survey_name: survey_name,
        response_link: response_link
      })
    )


      sendEmails(emailArray)
  }


  return (
    <form onSubmit={e => {handleSubmit(e)}}>


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
      <input type="button" value="Add email" onClick={addEmail}/>
      <input type="submit" value="Submit" />
    </form>

  )
}
