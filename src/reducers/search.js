import {
    SUBMIT_SEARCH,
    UPDATE_RESULTS,
    ON_INPUT_CHANGE,
    SET_LIST,
    ON_LIST_SELECT,
    ON_DATE_CHANGE
} from '../actions/search'

const today = new Date()
const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
const returnDate = (today.getDate() + 7) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()

const initialState = {
    params: {
        flyFrom: 'GB',
        flyTo: 'CZ',
        departDate: date,
        returnDate: returnDate,
    },
    fromInput: '',
    fromList: [],
    toInput: '',
    toList: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_INPUT_CHANGE:
            return {
                ...state,
                [action.field]: action.value
            }
        case ON_DATE_CHANGE:
            const day = action.value.slice(-2)
            const month = action.value.slice(5, 7)
            const year = action.value.slice(0, 4)
            return {
                ...state,
                params: Object.assign({}, state.params, {
                    [action.field]: day + '/' + month + '/' + year
                })
            }
        case SET_LIST:
            return {
                ...state,
                [action.field]: action.value
            }
        case SUBMIT_SEARCH:
            return {
                ...state,
            }
        case UPDATE_RESULTS:
            return {
                ...state,
            }
        case ON_LIST_SELECT:
            let newParams
            if (action.field === 'toInput') {
                newParams = Object.assign({}, state.params, {
                    flyTo: action.id
                })
            } else if (action.field === 'fromInput') {
                newParams = Object.assign({}, state.params, {
                    flyFrom: action.id
                })
            }
            return {
                ...state,
                [action.field]: action.name,
                params: newParams
            }
        default:
            return state
    }
}

export default reducer