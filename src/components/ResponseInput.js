import React from 'react';
import {connect} from 'react-redux';

class ResponseInput extends React.Component {

  state = {name: "",
    survey_id: this.props.survey.id,
    Ranking1: "", //will be a choice.id
    Ranking2: "",
    Ranking3: "",
    Ranking4: ""
  }
  //need no response possibility

  render() {
    let survey = this.props.survey
    //debugger;
    return (
      <div>
        ResponseInput
        <form>
          <label>First choice</label>
          <select>
            {survey.attributes.choices.map(choice =>
            <option> {choice.content}</option>)}
          </select>
          <br></br>
          <label>Second choice</label>
          <select>
            {survey.attributes.choices.map(choice =>
              <option> {choice.content}</option>)}
          </select>
          <br>
          </br>
          <label>Third choice</label>
          <select>
            {survey.attributes.choices.map(choice =>
            <option> {choice.content}</option>)}
          </select>
          <br></br>
          <label>Fourth choice</label>
          <select>
            {survey.attributes.choices.map(choice =>
              <option> {choice.content}</option>)}
          </select>
        </form>
      </div>
    )
  }

}
export default connect(null)(ResponseInput)
