import React from 'react';
import {connect} from 'react-redux'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import {registerUser} from '../actions'
import {loginUser} from '../actions'


class Register extends React.Component {

    onSubmit = (formValues) => {
        this.props.registerUser(formValues)
    }

    onLogin = (formValues) => {
        this.props.loginUser(formValues)
    }

    getRegisterResponse() {
        if (this.props.registerResponse != null) {
            return (
                <div>
                    <h5>
                        Successfully Registered!
                    </h5>
                    <div>
                        <p>
                            Please copy and paste the following link to your
                            resume/CV and a recruitor can click it to give feedback.
                        </p>
                        
                        <div className="ui label">
                        <div className="detail"> https://d2h5dpbj64ntdw.cloudfront.net/{this.props.registerResponse.feedbackurl}</div>
                        </div>
                           
                       
                    </div>
                </div>
            )
        }
    }

    getLoginResponse() {
        if (this.props.loginResponse != null) {
            return (
                <div>
                    <h5>
                        Successful Search!
                    </h5>
                    <div>
                        <p>
                            Please copy and paste the following link to your
                            resume/CV and a recruitor can click it to give feedback.
                        </p>
                        
                        <div className="ui label">
                        <div className="detail"> {this.props.loginResponse.feedbackurl}</div>
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
            Tired of sending applications and not getting replies from recruitors?
            <br>
            </br>
            Me too.
            <br>
            </br>
            This is why I developed this web app.
            <br>
            </br>
            Please register using your email and you will receive a link. Paste it on your application and a recruitor 
            can click on it to give feedback. Use the login form if you want to regenerate your link.
            <br>
            </br>
            Please note: You will receive an email from <b>crimsonscythestudios@gmail.com</b> once a recruitor sends feedback.
            <br>
            </br>
            I know. The site is ugly :)
            </h3>
            <h3>
                Register
            </h3>
            <div>
            <RegisterForm onSubmit={this.onSubmit}>

            </RegisterForm>
            </div>
            {this.getRegisterResponse()}
            <div>
            <h3>
                Login
            </h3>
            <LoginForm onSubmit={this.onLogin}> 

            </LoginForm>
            </div>
            {this.getLoginResponse()}
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        registerResponse: state.feedback.registerResponse,
        loginResponse: state.feedback.loginResponse
    }
}

export default connect(mapStateToProps, {registerUser, loginUser}) (Register)

