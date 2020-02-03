import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import "regenerator-runtime/runtime";

import reducers from '../reducers'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
)
sagaMiddleware.run(rootSaga)

export default store