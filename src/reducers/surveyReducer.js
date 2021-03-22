export default function surveyReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_SURVEYS":
      
      return action.payload.surveys.data
      //debugger;
    case "CREATE_SURVEY":
      //debugger;
      return [...state, action.payload.data]

    default:
      return state
  }

}
