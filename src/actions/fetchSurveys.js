export function fetchSurveys() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/surveys')
    .then(resp => resp.json())
    .then(surveys => dispatch({
      type: 'FETCH_SURVEYS',
      payload: surveys
    }))


  }
}
