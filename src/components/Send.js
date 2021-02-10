import React from 'react';
import OptionForm from './OptionForm';
import {sendOptions} from '../actions'
import { connect } from 'react-redux';

class Send extends React.Component {

    onSubmit = (formValues) => {
        this.props.sendOptions(formValues)
    }

    onSend = (formValues) => {
        if (this.props.optionsResponse!=null) {
            return <h1>
                Response has been successfully sent!
                You may close this page now.
            </h1>
        } else {
            return (<OptionForm onSubmit={this.onSubmit}>

                </OptionForm>)
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
        optionsResponse: state.feedback.optionsResponse
    }
}

export default connect(mapStateToProps, {sendOptions}) (Send)