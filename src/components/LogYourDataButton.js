import React from 'react';
import '../styles/Forms.css';
import Visits from '../Visits';

class LogYourDataButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        
        let user = true;

        if (user === true ) {
            return (Visits)
        }
        // if user is signed in show -> log your movement page.
        // if user is not signed in show -> signup page. 
    }

    render() {
        return(
            <div className="Button Main-CTA" onClick={this.handleSubmit}>
                Log Your Movement
            </div>
        )
    }
}

export default LogYourDataButton;