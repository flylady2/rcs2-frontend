export function createResponse(response) {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/surveys/${response.survey_id}/responses`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(response)
    })
    .then(resp => resp.json())
    .then(response => dispatch({
      type: 'CREATE_RESPONSE',
      payload: response
    }))


  }
}
