export function createUser(data) {
  //debugger;
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/signup',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    .then(resp => resp.json())
    .then(user => dispatch({
      type: 'CREATE_USER',
      payload: user
    }))


  }
}
