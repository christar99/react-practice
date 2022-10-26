import { delay, put, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";

const ADD = 'calculate/ADD';
const SUBS = 'calculate/SUBS';
const EAT = 'calculate/EAT';
const ADD_ASYNC = 'ADD_ASYNC';
const SUBS_ASYNC = 'SUBS_ASYNC';
const EAT_ASYNC = 'EAT_ASYNC';


export const add = (number) => ({
    type: ADD,
    number
})

export const subs = (number) => ({
    type: SUBS,
    number
})

export const eat = () => ({
    type: EAT
})
export const addAsync = () => ({ type: ADD_ASYNC });
export const subsAsync = () => ({ type: SUBS_ASYNC });
export const eatAsync = () => ({ type: EAT_ASYNC });

export function* addSaga() {
    yield delay(1000);
    yield put(add());
}

export function* subsSaga() {
    yield delay(1000);
    yield put(subs());
}

export function* eatSaga() {
    yield delay(1000);
    yield put(eat());
}

export function* calculateSaga() {
    yield takeEvery(EAT_ASYNC, eatSaga);
    yield takeLeading(ADD_ASYNC, addSaga);
    yield takeLatest(SUBS_ASYNC, subsSaga);
}

const initialState = {
    value: 0,
    at_it_was: false,
    causeOf: {
        sa: 0,
        da: 1,
        na: 2
    }
};

export default function calculate(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return { ...state, value: state.value + parseInt(action.number) }
        case SUBS:
            return { ...state, value: state.value - parseInt(action.number) }
        case EAT:
            return { 
                ...state,
                causeOf: {
                    sa: '섹',
                    da: '스',
                    na: '킹'
                }
            }
        default:
            return state;
    }
}