export default function responseReducer(state = {responses: []}, action) {
  switch (action.type) {
    case "CREATE_RESPONSE":
      //debugger;
      return {...state, responses: [...state.responses, action.payload.data]}


    default:
      return state
  }

}
