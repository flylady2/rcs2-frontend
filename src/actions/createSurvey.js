export function createSurvey(data) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/surveys',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(survey => {
      return dispatch({
        type: 'CREATE_SURVEY',
        payload: survey
      })
    })

  }
}
