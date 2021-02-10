import {
    REGISTER_USER,
    LOGIN_USER,
    SEND_OPTIONS,
    LOADING_STATE
} from '../actions/types'

// import _ from 'lodash'

export default (state={}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, registerResponse : action.payload}
        case LOGIN_USER:
            return {...state, loginResponse : action.payload}
        case SEND_OPTIONS:
            return {...state, optionsResponse: action.payload}
        case LOADING_STATE:
            return {...state, loadingResponse: action.payload}
        // case FETCH_STREAMS:
        //     return {...state, ..._.mapKeys(action.payload, 'id')}
        // case FETCH_STREAM:
        //     return {...state, [action.payload.id] : action.payload}
        // case CREATE_STREAM:
        //     return {...state, [action.payload.id]: action.payload} 
        // case EDIT_STREAM:
        //     return {...state, [action.payload.id]: action.payload}
        // case DELETE_STREAM:
        //     return _.omit(state, action.payload)
        default:
            return state
    }
}