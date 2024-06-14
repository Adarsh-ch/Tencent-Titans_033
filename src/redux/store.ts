import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
})

export const store=legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;