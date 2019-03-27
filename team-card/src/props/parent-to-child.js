import React from "react";
import TeamCard from "./fake-team-card";

class ParentToChildProps extends React.Component {

    logSomething = (sth) => {
        console.log('sth', sth)
    }

    render() {

        return (
            <TeamCard  logger={(variable) => this.logSomething(variable)} />
        )
    }
}

export default ParentToChildProps;