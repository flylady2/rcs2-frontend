import React from 'react';

import {MultipleEmailsForm} from '../components/MultipleEmailsForm';
import {Route, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteSurvey} from '../actions/deleteSurvey';
import {ResponseNumber} from './ResponseNumber';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


class UserFunctions extends React.Component {


  handleOnClick = () => {

    this.props.deleteSurvey({id: this.props.survey.id});

  }


  render() {
    let survey = this.props.survey

    return (
      <div>
        <Container>
          <Row>
            <Col>

          <button onClick={this.handleOnClick}>
            Delete this survey
          </button>
        </Col>
          <br></br>
          <br></br>
        </Row>
        <Row></Row>
          <Row>
            <Col>

        {survey && <NavLink exact to={`/user/surveys/${survey.attributes.name}/responses`}><Button>See how many responses this survey has</Button></NavLink>}
        <br></br>
        </Col>



        <Col>
        {survey && <LinkContainer to={`/user/surveys/${survey.attributes.name}/responses/emails`}><Button>Email Respondents</Button></LinkContainer>}
      </Col>

</Row>


        {survey && <Route exact path={`/user/surveys/${survey.attributes.name}/responses`}
        render={(routerProps) =>
        <ResponseNumber {...routerProps} survey={survey} />} />}
        <br></br>


        {survey && <Route exact path={`/user/surveys/${survey.attributes.name}/responses/emails`} render={(routerProps) =>
        <MultipleEmailsForm {...routerProps} survey={survey} />} />}
        <br></br>
        </Container>

        <br></br>
          <Col>

      </Col>
      </div>
    )
  }
}


export default connect (null, {deleteSurvey})(UserFunctions);
