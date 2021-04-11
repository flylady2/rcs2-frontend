export function deleteSurvey(idObj) {

  return (dispatch) => {

    fetch(`http://localhost:3000/api/v1/surveys/${idObj.id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "DELETE",
      body: JSON.stringify(idObj)
    })
    .then(resp => resp.json())
    .then(survey => dispatch({
      type: 'DELETE_SURVEY',
      payload: survey
    }))

  }
}
