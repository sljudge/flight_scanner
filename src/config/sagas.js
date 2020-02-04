import { takeEvery, select, call, put } from 'redux-saga/effects'
import { SUBMIT_SEARCH, UPDATE_RESULTS, ON_INPUT_CHANGE, SET_LIST } from '../actions/search'

const getFlights = fields => {
    console.log(fields)
    const { flyTo, flyFrom, departDate, returnDate } = { ...fields }
    return fetch(`https://api.skypicker.com/flights?partner=picky&fly_from=${flyFrom}&fly_to=${flyTo}&date_from=${departDate}&date_to=${returnDate}&limit=15`)
}

const getLocations = input => {
    return fetch(`https://api.skypicker.com/locations?term=${input}&locale=en-US&location_types=airport&location_types=city&location_types=country&limit=10&active_only=true&sort=name`)
}

function* searchForFlights() {
    console.log('SEARCHING')
    const params = yield select(state => state.search.params)
    // const flyTo = yield select(state => state.search.params.flyTo)
    try {
        const response = yield call(getFlights, { ...params })
        const result = yield response.json()
        yield put({ type: UPDATE_RESULTS, data: result.data })
        console.log(result)
    } catch (e) {
        yield alert('api error')
        yield console.log(e)
    }
}

function* searchForLocations(action) {
    try {
        const response = yield call(getLocations, action.value)
        const result = yield response.json()
        const locations = yield result.locations
        const listField = yield action.field === 'toInput' ? 'toList' : 'fromList'
        yield (put({ type: SET_LIST, field: listField, value: locations }))
    } catch (e) {
        yield alert('api error')
        yield console.log(e)
    }
}

export function* rootSaga() {
    console.log('WATCHING')
    yield takeEvery(SUBMIT_SEARCH, searchForFlights)
    yield takeEvery(ON_INPUT_CHANGE, searchForLocations)
}

