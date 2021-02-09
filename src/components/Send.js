import React from 'react';
import OptionForm from './OptionForm';
import {sendOptions} from '../actions'
import { connect } from 'react-redux';

class Send extends React.Component {

    onSubmit = (formValues) => {
        this.props.sendOptions(formValues)
    }

    render() {
        return (
            <div>
                <OptionForm onSubmit={this.onSubmit}>

                </OptionForm>
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return
// }

export default connect(null, {sendOptions}) (Send)