import { counterReducer} from "./counterRedux/counter.reducer";
import { bourgersReducer } from "./BourgersData/bourgers.reducer";
import { addremoveclassReducer } from "./AddRemoveClass/addremove.reducer";
import { combineReducers } from "redux";

let rootReducer=combineReducers({
    counterReducer,
    bourgersReducer,
    addremoveclassReducer,

})

export {rootReducer}