export default function userReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_USER":
    //debugger;

      return [...state, action.payload.data]

    default:
      return state
  }

}
