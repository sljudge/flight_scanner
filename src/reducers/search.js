import { SUBMIT_SEARCH } from '../actions/search'
import { UPDATE_RESULTS } from '../actions/search'

const initialState = {
    params: {
        fly_from: 'GB',
        fly_to: 'CZ',
    },
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SEARCH:
            return {
                ...state,
            }
        case UPDATE_RESULTS:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer