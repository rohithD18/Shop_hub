import { combineReducers } from "redux";

import mainReducer from "./indexReducer";

const rootReducer = combineReducers({
     mainReducer,
});

export default rootReducer;