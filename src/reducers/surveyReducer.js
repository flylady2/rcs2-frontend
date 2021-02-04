export default function surveyReducer(state = {surveys: []}, action) {
  switch (action.type) {
    case "FETCH_SURVEYS":
      //debugger;
      return {surveys: action.payload.surveys.data}
      //debugger;
    case "CREATE_SURVEY":
      //debugger;
      return {...state, surveys: [...state.surveys, action.payload.survey.data]}
    case "ADD_RESPONSE":
    console.log(action)
    //debugger;
    //  let surveys = state.accounts.map(survey => {
    //    if (survey.id === action.payload.response.data.survey_id) {
    //      return action.payload
    //    } else {
    //      return
      //  }


    default:
      return state
  }

}
