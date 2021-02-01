export default function surveyReducer(state = {surveys: []}, action) {
  switch (action.type) {
    case "FETCH_SURVEYS":

      return {surveys: action.payload.surveys.data}
      //debugger;
      case "CREATE_SURVEY":
      //debugger;
        return {...state, surveys: [...state.surveys, action.payload.survey.data]}
    default:
      return state
  }

}
