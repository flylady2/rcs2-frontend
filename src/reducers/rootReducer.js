import { combineReducers } from "redux";
import surveyReducer from './surveyReducer';
import responseReducer from './responseReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  surveys: surveyReducer,
  responses: responseReducer,
  users:  userReducer
})
export default rootReducer;
