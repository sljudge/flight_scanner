import { takeEvery, select, call, put } from 'redux-saga/effects'
import { SUBMIT_SEARCH, UPDATE_RESULTS } from '../actions/search'

const getFlights = fields => {
    console.log(fields)
    const { fly_to, fly_from } = { ...fields }
    return fetch(`https://api.skypicker.com/flights?partner=picky&fly_from=${fly_from}&fly_to=${fly_to}&date_from=01/03/2020&date_to=20/03/2020`)
}

function* search() {
    console.log('SEARCHING')
    const fly_from = yield select(state => state.search.params.fly_from)
    const fly_to = yield select(state => state.search.params.fly_to)
    try {
        const response = yield call(getFlights, { fly_from, fly_to })
        const result = yield response.json()
        yield put({ type: UPDATE_RESULTS, data: result.data })
        console.log(result)
    } catch (e) {
        yield alert('api error')
        yield console.log(e)
    }

}

export function* rootSaga() {
    console.log('WATCHING')
    yield takeEvery(SUBMIT_SEARCH, search)
}

