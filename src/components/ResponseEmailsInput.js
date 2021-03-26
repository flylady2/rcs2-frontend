import React from 'react';
import {connect} from 'react-redux';
import {sendEmails} from '../actions/sendEmails';






class ResponseEmailsInput extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      respondent_email: ""//this.props.userId

    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let responseEmails = {
      //user_id: parseInt(this.props.user.id),
      ...this.state,
      survey_name: this.props.survey.attributes.name,
      response_link: `http://localhost:3001/surveys/${this.props.survey.attributes.name}/responses/new`
      //...initialParameters

    }
    this.props.sendEmails(responseEmails)
  }


  render() {


    //let survey = this.props.survey
    //let response_link = `http://localhost:3000/api/v1/surveys/${this.props.survey.name}/responses/new`

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Respondent Emails:</label>
          <input name="respondent_email" type="email" value={this.state.respondent_email} onChange={this.handleChange}/>


          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
export default connect(null, {sendEmails})(ResponseEmailsInput)
