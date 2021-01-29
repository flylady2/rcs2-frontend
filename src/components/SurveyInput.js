import React from 'react';
import {connect} from 'react-redux';
import {createSurvey} from '../actions/createSurvey'

class SurveyInput extends React.Component {

  state = {name: "",
    user_id: 1,
    choiceAContent: "",
    choiceBContent: "",
    choiceAInitialScore: 0,
    choiceBInitialScore: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.user_id]: event.target.user_id,
      [event.target.choiceAContent]: event.target.choiceAContent,
      [event.target.choiceAContent]: event.target.choiceAContent,
      choiceAInitialScore: 0,
      choiceBInitialScore: 0
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createSurvey(this.state)
  }


  render() {



    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Survey Name:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <label>user_id:</label>
          <input name="user_id" type="number" value={this.state.user_id} onChange={this.handleChange}/>
          <br/>
          <label>ChoiceA:</label>
          <input name="choiceAContent" type="content" value={this.state.choiceAContent} onChange={this.handleChange}/>
          <br/>
          <label>ChoiceA initial score:</label>
          <input name="choiceAScore" type="number" />
          <br/>
          <label>Choice:</label>
          <input name="choiceBContent" type="content" value={this.state.choiceBContent} onChange={this.handleChange}/>
          <br/>
          <label>ChoiceB initial score:</label>
          <input name="choiceBscore" type="number" />
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
export default connect(null, {createSurvey})(SurveyInput)
