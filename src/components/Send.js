import React from 'react';
import OptionForm from './OptionForm';
import {sendOptions} from '../actions'
import {isLoading} from '../actions'
import { connect } from 'react-redux';

class Send extends React.Component {

    onSubmit = (formValues) => {
        this.props.sendOptions(formValues)
        this.props.isLoading(true)
    }

    onSend = (formValues) => {
        if (this.props.optionsResponse!=null) {
            return <h1 style={{ color: 'green' }}>
                Response has been successfully sent!
                <br>
                </br>
                You may close this page now.
            </h1>
        } else {
            if (this.props.loadingResponse!=null){
                return (
                    <h1>
                        Sending...
                        <br>
                        </br>
                        Please wait...
                    </h1>
                )
            } else {
            return (
            
            <OptionForm onSubmit={this.onSubmit}>

            </OptionForm>
            
            )
        }
        }
        
    }

    render() {
        
        return (
            <div>
                {/* <OptionForm onSubmit={this.onSubmit}>

                </OptionForm> */}
                <div>
                    {this.onSend()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        optionsResponse: state.feedback.optionsResponse,
        loadingResponse: state.feedback.loadingResponse
    }
}

export default connect(mapStateToProps, {sendOptions, isLoading}) (Send)