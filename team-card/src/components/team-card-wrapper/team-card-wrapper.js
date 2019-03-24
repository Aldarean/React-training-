import React from 'react';
import TeamCardHeader from './team-card-header/team-card-header';


class TeamCardWrapper extends React.Component {
    render() {

        return (
            <div className="team-card-wrapper">
                <TeamCardHeader />
                Team card wrapper
            </div>
        )
    }
}

export default TeamCardWrapper;
