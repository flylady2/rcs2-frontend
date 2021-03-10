export function fetchResponses() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/responses')
    .then(resp => resp.json())
    .then(responses => dispatch({
      type: 'FETCH_RESPONSES',
      payload: responses
    }))


  }
}
