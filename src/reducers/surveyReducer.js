export default function surveyReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_SURVEYS":
      
      return action.payload.surveys.data

    case "CREATE_SURVEY":

      return [...state, action.payload.data]

    case "DELETE_SURVEY":

      return [...state.filter(survey => survey.id !== action.payload.data.id)]

    default:
      return state
  }

}
