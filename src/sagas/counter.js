import { all, fork, takeLatest, delay, put } from "@redux-saga/core/effects";
import {
    DECREASE_FALSE, DECREASE_REQUEST, DECREASE_SUCCESS,
    INCREASE_FALSE, INCREASE_REQUEST, INCREASE_SUCCESS,
    SET_DIFF_FALSE, SET_DIFF_REQUEST, SET_DIFF_SUCCESS
}
    from "../reducer/conter";

function* increaseSaga() {
    try {
        yield delay(1000);
        console.log('saga increase_success')
        yield put({
            type: INCREASE_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: INCREASE_FALSE,
            error: err.response.data,
        });
    }
}

function* decreaseSaga() {
    try {
        yield delay(1000);
        yield put({
            type: DECREASE_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: DECREASE_FALSE,
            error: err.response.data,
        });
    }
}

function* setDiffSaga(action) {
    try {
        yield delay(1000);
        yield put({
            type: SET_DIFF_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: SET_DIFF_FALSE,
            error: err.response.data,
        });
    }
}
function* watchIncrease() {
    console.log('watch increaseSaga')
    yield takeLatest(INCREASE_REQUEST, increaseSaga);
}

function* watchDecrease() {
    yield takeLatest(DECREASE_REQUEST, decreaseSaga);
}

function* watchSetDiff() {
    yield takeLatest(SET_DIFF_REQUEST, setDiffSaga);
}

export default function* counter() {
    yield all([
        fork(watchIncrease),
        fork(watchDecrease),
        fork(watchSetDiff),
    ])
}