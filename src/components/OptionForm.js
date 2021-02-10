import { reduxForm } from "redux-form"
import React from 'react';


class OptionForm extends React.Component {

    // onSubmit = (formValues) => {
    //     this.props.onSubmit(formValues)
    // }

    

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.selectedOption)
    
    }

      onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }
    
    //   formSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.selectedOption)
    //   }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="radio">
                    <label>
                        
                        <input
                        type="radio"
                        value="Not enough experience"
                        checked={this.state.selectedOption === 'Not enough experience'}
                        onChange={this.onValueChange}
                        >
                        
                        </input>
                        Not enough experience
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Option2"
                        checked={this.state.selectedOption === 'Option2'}
                        onChange={this.onValueChange}
                        >
                            
                        </input>
                        Option2
                    </label>
                </div>
                <div>
                    Selected option is : {this.state.selectedOption}
                </div>
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
        )
    }



}


export default OptionForm

// export default reduxForm({
//     form: 'optionForm'
// }) (OptionForm)
