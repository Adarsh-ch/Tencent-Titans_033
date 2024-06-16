import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    user: userReducer
})

export const store=legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;