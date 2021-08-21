import { all, fork } from "@redux-saga/core/effects";
import counter from "../sagas/counter";

export default function* rootSaga() {
    yield all([
        fork(counter)
    ])
}