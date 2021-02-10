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
            <div>
                <div>
                    <h3 >
                        Thank you for filling this out, it means a lot!
                        <br>
                        </br>
                        Please select an option from the list and click the Submit button.
                    </h3>
                </div>
                <br>
                </br>
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
                <br>
                </br>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Wrong skill set"
                        checked={this.state.selectedOption === 'Wrong skill set'}
                        onChange={this.onValueChange}
                        >
                            
                        </input>
                        Wrong skill set
                    </label>
                </div>
                <br>
                </br>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Wrong personality"
                        checked={this.state.selectedOption === 'Wrong personality'}
                        onChange={this.onValueChange}
                        >
                            
                        </input>
                        Wrong personality
                    </label>
                </div>
                <br>
                </br>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Sloppy Application"
                        checked={this.state.selectedOption === 'Sloppy Application'}
                        onChange={this.onValueChange}
                        >
                            
                        </input>
                        Sloppy Application
                    </label>
                </div>
                <br>
                </br>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="General high quality applications by other people"
                        checked={this.state.selectedOption === 'General high quality applications by other people'}
                        onChange={this.onValueChange}
                        >
                            
                        </input>
                        General high quality applications by other people
                    </label>
                </div>
                <br>
                </br>
                <div>
                    Selected option is : {this.state.selectedOption}
                </div>
                <button className="btn btn-default" type="submit">
                    Submit
                </button>
            </form>
            </div>
        )
    }



}


export default OptionForm

// export default reduxForm({
//     form: 'optionForm'
// }) (OptionForm)
