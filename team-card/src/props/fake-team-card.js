import React from "react";

class FakeTeamCard extends React.Component {

    render() {
        console.log('All props', this.props);

        return (
            <button onClick={() => this.props.logger('test')}>
                Click to send data back
            </button>
        )
    }
}

export default FakeTeamCard;