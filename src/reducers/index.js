import { combineReducers} from 'redux'
import { reducer as formReducer} from 'redux-form'

import feedbackReducer from './feedbackReducer'

export default combineReducers({
    // auth: authReducer,
    form: formReducer, //reducer provided by reduxform,
    feedback: feedbackReducer
})
