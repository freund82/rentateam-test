import { counterReducer} from "./counterRedux/counter.reducer";
import { combineReducers } from "redux";

let rootReducer=combineReducers({
    counterReducer,
})

export {rootReducer}