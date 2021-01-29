import React from 'react';

const Survey = (props) => {



  let survey = props.surveys && props.surveys.find(survey => survey.id == parseInt(props.match.params.id))
  //debugger;
  console.log(survey)
  //props.surveys && props.surveys.map(
  //let survey = props.surveys.filter(survey => survey.id == props.match.params.id[0])
  //debugger;
  return (
    <div>
      <li>

        {survey ? survey.attributes.name : null}
      </li>
    </div>
  )
}
export default Survey;
