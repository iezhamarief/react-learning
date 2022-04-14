import React from "react";
import ReactDOM from "react-dom";


/// class based component
/// 1. JS class
/// 2. extends React.Component
class App extends React.Component {

    /// constructor
    constructor(props) {
        super(props) /// 3.super

        /// state
        this.state = { latitude: null, errorMessage: ''}

        window.navigator.geolocation.getCurrentPosition(

            (position) => {
                this.setState({latitude: position.coords.latitude}) /// setState - update/rerender state property
            },

            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }

    /// 3.render
    render() { 

        /// JSX
        /// conditional rendering
        if(this.state.errorMessage && !this.state.latitude) {

            return <div> { this.state.errorMessage } </div>
        }
        
        if(!this.state.errorMessage && this.state.latitude) {

            return <div> { this.state.latitude }</div>
        }

        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)