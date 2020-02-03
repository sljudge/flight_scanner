export const SUBMIT_SEARCH = 'SUBMIT_SEARCH'
export const UPDATE_RESULTS = 'UPDATE_RESULTS'
export const SET_ROTATE_FOR_SPINNER = 'SET_ROTATE_FOR_SPINNER'

export const submitSearch = () => {
    return {
        type: SUBMIT_SEARCH
    }
}

export const setRotateForSpinner = () => ({
    type: SET_ROTATE_FOR_SPINNER
})