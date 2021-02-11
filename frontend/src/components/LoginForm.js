import React from 'react';
import {Field, reduxForm} from 'redux-form'

class LoginForm extends React.Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error':''}`
        return (
        <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
        </div>
        ) 
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="email" component={this.renderInput} label="Enter email address"></Field>
                <button className="ui buttom primary">Submit</button>
            </form>
        )
    }

}

const validate = (formValues) => {

    const errors = {}
    if(!formValues.email) {
        errors.title = 'Must enter a title'
    }

    return errors

}

export default reduxForm({
    form: 'loginForm',
    validate: validate
}) (LoginForm)
