import React from 'react';
import {connect} from 'react-redux';
import {createResponse} from '../actions/createResponse'

const RANKINGS = {
  ranking1: 1,
  ranking2: 2,
  ranking3: 3,
  ranking4: 4
}

class ResponseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      respondent: "",
    //  survey_id: this.props.survey.id,
  //    ranking1: "1", //will be a choice.id
  //    ranking2: "2",
  //    ranking3: "3",
    //  ranking4: "4",

      ranking1_choiceId: "",
      ranking2_choiceId: "",
      ranking3_choiceId: "",
      ranking4_choiceId: ""
    }
  }


  handleChange = (event) => {
    //debugger;
    this.setState({
    //  [event.target.respondent]: event.target.value,
    //  survey_id: this.props.survey.id,
    //  ranking1: "1", //will be a choice.id
    //  ranking2: "2",
    //  ranking3: "3",
    //  ranking4: "4",
      [event.target.name]: event.target.value

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let response = {
      survey_id: parseInt(this.props.survey.id),
      ...this.state,
      ...RANKINGS
    }
    this.props.createResponse(response)
  }

  render() {
    let survey = this.props.survey
    //debugger;
    return (
      <div>
        ResponseInput
        <form onSubmit={this.handleSubmit}>

          <label>First choice: </label>
          <select name="ranking1_choiceId" value={this.state.ranking1_choiceId} onChange={this.handleChange}>
            <option value={null}>Please select from the menu below</option>
            {survey.attributes.choices.map(choice =>
            <option value={choice.id}> {choice.content}</option>)}

          </select>
          <br></br>
          <label>Second choice</label>
          <select name="ranking2_choiceId" value={this.state.ranking2_choiceId} onChange={this.handleChange}>
            <option value={null}>Please select from the menu below</option>
            {survey.attributes.choices.map(choice =>
              <option value={choice.id}> {choice.content}</option>)}
          </select>
          <br>
          </br>
          <label>Third choice</label>
          <select name="ranking3_choiceId" value={this.state.ranking3_choiceId} onChange={this.handleChange}>
            <option value={null}>Please select from the menu below</option>
            {survey.attributes.choices.map(choice =>
            <option value={choice.id}> {choice.content}</option>)}
          </select>
          <br></br>
          <label>Fourth choice</label>
          <select name="ranking4_choiceId" value={this.state.ranking4_choiceId} onChange={this.handleChange}>
            <option value={null}>Please select from the menu below</option>
            {survey.attributes.choices.map(choice =>
              <option value={choice.id}> {choice.content}</option>)}
          </select>
          <label>Your name:</label>
          <input type="text" name="respondent" value={this.state.respondent} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
export default connect(null, {createResponse})(ResponseInput)
