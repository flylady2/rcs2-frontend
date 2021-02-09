import { combineReducers } from "redux";
import surveyReducer from './surveyReducer';
import responseReducer from './responseReducer';

const rootReducer = combineReducers({
  surveys: surveyReducer,
  responses: responseReducer
})
export default rootReducer;
