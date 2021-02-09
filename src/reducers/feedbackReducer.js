import {
    REGISTER_USER,
    LOGIN_USER
} from '../actions/types'

// import _ from 'lodash'

export default (state={}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, registerResponse : action.payload}
        case LOGIN_USER:
            return {...state, loginResponse : action.payload}
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