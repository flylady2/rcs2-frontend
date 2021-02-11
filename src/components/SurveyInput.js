import React from 'react';
import {connect} from 'react-redux';
import {createSurvey} from '../actions/createSurvey'

let initialScores = {
  choiceAInitialScore: 0,
  choiceBInitialScore: 0,
  choiceCInitialScore: 0,
  choiceDInitialScore: 0
}

class SurveyInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: 2,//this.props.userId
      name: "",
      choiceAContent: "",
      choiceBContent: "",
      choiceCContent: "",
      choiceDContent: "",
      threshold: ""
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let survey = {
      //user_id: parseInt(this.props.user.id),
      ...this.state,
      ...initialScores
    }
    this.props.createSurvey(survey)
  }


  render() {



    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Survey Name:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
          <br/>
          <label>Choice:</label>
          <input name="choiceAContent" type="content" value={this.state.choiceAContent} onChange={this.handleChange}/>
          <br/>
          <label>Choice:</label>
          <input name="choiceBContent" type="content" value={this.state.choiceBContent} onChange={this.handleChange}/>
          <br/>
          <label>Choice:</label>
          <input name="choiceCContent" type="content" value={this.state.choiceCContent} onChange={this.handleChange}/>
          <br/>
          <label>Choice:</label>
          <input name="choiceDContent" type="content" value={this.state.choiceDContent} onChange={this.handleChange}/>
          <br></br>
          <label>Minimum number of responses to calculate a winner:</label>
          <input name="threshold" type="number" value={this.state.threshold} onChange={this.handleChange} />

          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
export default connect(null, {createSurvey})(SurveyInput)
