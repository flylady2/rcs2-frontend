export default function responseReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_RESPONSES":
      //debugger;
      return action.payload.responses.data
    case "CREATE_RESPONSE":
      //debugger;
      return [...state, action.payload.data]


    default:
      return state
  }

}
