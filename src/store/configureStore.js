import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => next => action => {
    console.log(action)
    return next(action)
}

const store = () => {
    const sagaMiddleWare = createSagaMiddleware()

    const middlewares = [sagaMiddleWare, loggerMiddleware] // 미들웨어 추가시..
    const enhangcer = composeWithDevTools(compose(applyMiddleware(...middlewares)))
    let create = createStore(rootReducer, enhangcer)
    create.sagaTask = sagaMiddleWare.run(rootSaga)

    return create
}

export default store;