import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import calculate, { calculateSaga } from "./calculate";
import posts, { postsSaga } from './posts';
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
    calculate,
    posts
});
export function* rootSaga() {
    yield all([counterSaga(), calculateSaga(), postsSaga()]);
}

export default rootReducer;