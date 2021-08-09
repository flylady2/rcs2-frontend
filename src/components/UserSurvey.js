import React from 'react';
import UserFunctions from '../components/UserFunctions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const UserSurvey = (props) => {


   let survey = props.surveys && props.surveys.find(survey => survey.attributes.name === props.match.params.name)


  let choices = survey && survey.attributes.choices

  return (
    <div>
      <Container>
        <Row>
        <Col>
      <h2>
        Survey: {survey ? survey.attributes.name : null}
      </h2>

        <ul className="list-group">
        {choices && choices.map(choice =>
          <li key={choice.id} className="list-group-item"> <h4>{choice.content} </h4></li>)}
        </ul>
      </Col>
        <br></br>
      <Col>
      <UserFunctions survey={survey}/>
      </Col>
      </Row>
      </Container>



    </div>


  )
}

export default UserSurvey;
