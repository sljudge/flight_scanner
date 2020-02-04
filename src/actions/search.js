export const SUBMIT_SEARCH = 'SUBMIT_SEARCH'
export const UPDATE_RESULTS = 'UPDATE_RESULTS'
export const SET_ROTATE_FOR_SPINNER = 'SET_ROTATE_FOR_SPINNER'
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE'
export const ON_DATE_CHANGE = 'DATE_CHANGE'
export const SET_LIST = 'SET_LIST'
export const ON_LIST_SELECT = 'ON_LIST_SELECT'

export const submitSearch = () => ({
    type: SUBMIT_SEARCH
})
export const setRotateForSpinner = () => ({
    type: SET_ROTATE_FOR_SPINNER
})
export const onInputChange = (field, value) => ({
    type: ON_INPUT_CHANGE,
    field,
    value
})
export const onDateChange = (field, value) => {
    console.log('date change')
    return ({
        type: ON_DATE_CHANGE,
        field,
        value
    })
}
export const setList = (field, value) => ({
    type: ON_INPUT_CHANGE,
    field,
    value
})
export const onListSelect = (name, id, field) => ({
    type: ON_LIST_SELECT,
    name,
    id,
    field
})
