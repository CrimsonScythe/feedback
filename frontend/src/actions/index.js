import feedback from '../apis/feedback' 

import {
    REGISTER_USER,
    LOGIN_USER,
    SEND_OPTIONS,
    LOADING_STATE
} from './types'

export const registerUser = (formValues) => {
    return async (dispatch, getState) => {
        const formValue = formValues['email']
        console.log(formValues)
        // const response = await feedback.get('/register', {...formValues})
        const response = await feedback.get('/register', {
            params: {
                email: formValue
            }
        })
        dispatch({type: REGISTER_USER, payload: response.data})
    }
}

export const loginUser = (formValues) => {
    return async (dispatch, getState) => {
        const formValue = formValues['email']
        console.log(formValues)
        // const response = await feedback.get('/register', {...formValues})
        const response = await feedback.get('/login', {
            params: {
                email: formValue
            }
        })
        dispatch({type: LOGIN_USER, payload: response.data})
    }
}

export const sendOptions = (formValues, user_id) => {
    return async (dispatch, getState) => {
        console.log(formValues)
        const response = await feedback.get('/send', {
            params: {
                option: formValues,
                id: user_id
            }
        })
        dispatch({type: SEND_OPTIONS, payload: response.data})
    }
}

export const isLoading = (value) => {
    return async (dispatch, getState) => {
        dispatch({type: LOADING_STATE, payload: value})
    }
}