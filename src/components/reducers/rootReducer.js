import { combineReducers } from "redux";
import { photoReducer } from "./photoFormReducer";

export const rootReducer = combineReducers({
    photoReducer : photoReducer,
})