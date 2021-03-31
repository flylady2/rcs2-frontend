export function sendEmails(data) {



    fetch('http://localhost:3000/api/v1/responses/emails',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  //  .then(survey => dispatch({
  //    type: 'CREATE_SURVEY',
  //    payload: survey
  //  }))



}
