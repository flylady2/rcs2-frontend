export default function responseReducer(state = [], action) {
  switch (action.type) {

    case "CREATE_RESPONSE":

      return [...state, action.payload.data]


    default:
      return state
  }

}
