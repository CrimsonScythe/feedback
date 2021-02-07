import React from 'react';
import {connect} from 'react-redux'
import RegisterForm from './RegisterForm'
import {registerUser} from '../actions'


class Register extends React.Component {

    onSubmit = (formValues) => {
        this.props.registerUser(formValues)
    }

    getResponse() {
        if (this.props.registerResponse !== null) {
            return (
                <div>
                    <h5>
                        Success!
                    </h5>
                    <div>
                        <p>
                            Please copy and paste the following link to your
                            resume/CV and a recruitor can click it to give feedback.
                        </p>
                        
                        <div className="ui label">
                        <div className="detail"> {this.props.registerResponse.feedbackurl}</div>
                        </div>
                           
                       
                    </div>
                </div>
            )
        }
    }

    render () {
        console.log(this.props.registerResponse)
        return(
        <div>
            <h3>
                Register
            </h3>
            <div>
            <RegisterForm onSubmit={this.onSubmit}>

            </RegisterForm>
            </div>
            {this.getResponse()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        registerResponse: state.feedback.response
    }
}

export default connect(mapStateToProps, {registerUser}) (Register)

