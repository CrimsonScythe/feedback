import feedback from '../apis/feedback' 

import {
    REGISTER_USER
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