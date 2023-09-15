import { combineReducers } from "redux";
import counterReducer from "../src/modules/counter"; // 실제 경로에 따라 수정해야 함

const rootReducer = combineReducers({
  counter: counterReducer,
  // 다른 리듀서들도 포함할 수 있음
});

export default rootReducer;
