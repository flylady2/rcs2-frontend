import React from 'react';
import {connect} from 'react-redux';
import {createSurvey} from '../actions/createSurvey'


class NewSurveyInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      choices: [{content: ""}],
      name: "",
      user_email: "",
      threshold: ""
    }
  }


  handleChange = (e) => {
    if (["content"].includes(e.target.className)) {

      let choices = [...this.state.choices]
      choices[e.target.dataset.id][e.target.className] = e.target.value

      this.setState({ choices})

    } else {
      this.setState({ [e.target.name]: e.target.value})

    }
  }

  addChoice = (e) => {
    this.setState((prevState) => ({
     choices: [...prevState.choices, {content: ""}]
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.createSurvey(this.state);
    this.props.history.push('/user/surveys');
  }


  render() {
    let {choices} = this.state


    return (
      <form  onSubmit={this.handleSubmit} >
      <div className="form-group justify-content-center">

          <label htmlFor="name">Name of Survey:  </label>
          <input type="text" name="name" id="name" onChange={this.handleChange}/>
          <br></br>
          <label htmlFor="email">Your email:  </label>
          <input type="email" name="user_email" id="user_email"onChange={this.handleChange} />
          <br></br>
          <label htmlFor="threshold">Threshold number of responses  </label>
          <input type="number" name="threshold" id="threshold" onChange={this.handleChange}/>
          <br></br>
          {choices.map((val, idx) => {
            let choiceId = `choice-${idx}`
            return (
              <div key={idx}>
              <label htmlFor={choiceId}>{`Choice #${idx + 1}:`}</label>
              <input type="text" name={choiceId} data-id={idx} id={choiceId} className="content" value={choices[idx].content}
                onChange={this.handleChange}/>
              </div>
            )
          })}
          <input type="button" value="Add another choice" onClick={this.addChoice}/>
          <br></br>
          <input type="submit" value="Submit" />


      </div>
      </form>
    )
  }
}
export default connect(null, {createSurvey})(NewSurveyInput)
