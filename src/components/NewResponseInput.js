import React from 'react';
import {connect} from 'react-redux';
import {createResponse} from '../actions/createResponse'



class NewResponseInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: "",
      respondent_email: "",
      survey_id: parseInt(this.props.survey.id)
      }
  }




  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createResponse(this.state)
  }

  render() {
    let survey = this.props.survey

    let choices = survey.attributes.choices


    return (
      <div className = "form-group">

        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>

        {choices.map((val, idx) => {
          let rankedChoice = `rankedChoice${idx + 1}`

          return (
            <div key={idx}>
          <label htmlFor={rankedChoice}> {`Choice #${idx + 1}:`} </label>
          <select name={rankedChoice} value={`this.state.rankedChoice${idx + 1}`.value} id={rankedChoice} className="rankedChoice" >
            <option value={null}>Please select from the menu below</option>
            {survey.attributes.choices.map(choice =>
            <option value={choice.id} key={choice.id}> {choice.content}</option>)}</select>
            </div>
          )
        })}


          <br></br>
          <label>Your email:</label>
          <input name="respondent_email" type="email" value={this.state.respondent_email} onChange={this.handleChange}/>
          <br></br>
          <label>Your token:</label>
          <input type="text" name="token" value={this.state.token} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
export default connect(null, {createResponse})(NewResponseInput)
