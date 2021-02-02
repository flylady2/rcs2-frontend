import React from 'react';
import {connect} from 'react-redux';

class ResponseInput extends React.Component {

  state = {name: "",
    survey_id: this.props.survey.id,
    ranking1: "1", //will be a choice.id
    ranking2: "2",
    ranking3: "3",
    ranking4: "4"
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let survey = this.props.survey
    //debugger;
    return (
      <div>
        ResponseInput
        <form>
          <label>First choice</label>
          <select name="ranking1" value={this.state.ranking1} onChange={this.handleChange}>
            {survey.attributes.choices.map(choice =>
            <option key={choice.id}> {choice.content}</option>)}
          </select>
          <br></br>
          <label>Second choice</label>
          <select name="ranking2" value={this.state.ranking2} onChange={this.handleChange}>
            {survey.attributes.choices.map(choice =>
              <option key={choice.id}> {choice.content}</option>)}
          </select>
          <br>
          </br>
          <label>Third choice</label>
          <select name="ranking3" value={this.state.ranking3} onChange={this.handleChange}>
            {survey.attributes.choices.map(choice =>
            <option key={choice.id}> {choice.content}</option>)}
          </select>
          <br></br>
          <label>Fourth choice</label>
          <select name="ranking4" value={this.state.ranking4} onChange={this.handleChange}>
            {survey.attributes.choices.map(choice =>
              <option key={choice.id}> {choice.content}</option>)}
          </select>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
export default connect(null)(ResponseInput)
