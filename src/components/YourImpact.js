import React from 'react';

class YourImpact extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            impact: {}
        }
    }
    

    render() {
        if (this.state.impact === null ) {
            return (
                <div>
                    We dont have enough data points for this yet. Try telling us a little bit
                    about your activity.
                </div>
            )
        } else {
            return ( 
                <div>
                    This is your impact
                </div>
            )
        }
    }
}

export default YourImpact;