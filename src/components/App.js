import React from 'react';
import Register from './Register';
import Send from './Send'
import Retrieve from './Retrieve'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history'


class App extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            url: null,
        }
        // console.log(props.store)

        props.store.subscribe(() => {
            console.log(props.store.getState())
            if (props.store.getState().feedback.registerResponse != null){
            console.log(props.store.getState().feedback.registerResponse.feedbackurl)
        
            this.setState({
                url: props.store.getState().feedback.registerResponse.feedbackurl
            })

        } 
    
    })

        
    }

    render () {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                <Switch>
                    <Route path="/" exact component={Register}></Route>
                    {/* {this.state.url.map((ur) => <Route path={ur} component={Send}></Route>)} */}
                    {<Route path={this.state.url} component={Send}></Route>}
                </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App

// const App = () => {
    // return (
    //     <div className="ui container">
    //         <Router>
    //             <div>
    //         <Switch>
    //             <Route path="/" exact component={Register}></Route>
    //             {/* <Route path="/send" exact component={}></Route> */}
    //             {/* <Route path="/send" component></Route> */}
    //         </Switch>
    //         </div>
    //         </Router>
    //     </div>
    // );
// }

// export default App;