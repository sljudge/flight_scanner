import {
    UPDATE_RESULTS,
    SUBMIT_SEARCH,
    SET_ROTATE_FOR_SPINNER,
    SET_AIRLINES
} from '../actions/search'
import { airportIATAs, airlineIATAs } from '../assets'

const initialState = {
    flights: [],
    airlines: airlineIATAs,
    loading: {
        isLoading: null,
        rotate: 0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SEARCH:
            return {
                ...state,
                loading: Object.assign({}, state.loading, {
                    isLoading: true
                })
            }
        case UPDATE_RESULTS:
            return {
                ...state,
                flights: action.data,
                loading: {
                    isLoading: false,
                    rotate: 0
                }
            }
        case SET_ROTATE_FOR_SPINNER:
            return {
                ...state,
                loading: Object.assign({}, state.loading, {
                    rotate: state.loading.rotate + 8
                })
            }
        default:
            return state
    }
}

export default reducer