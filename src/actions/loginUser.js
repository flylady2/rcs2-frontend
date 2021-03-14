
export function loginUser(data) {
  //debugger;
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/login',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)

    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        localStorage.setItem('token', data.jwt)
        dispatch({
            type: 'CREATE_USER',
            payload: data.user
      })
      }
    })
  }
}
