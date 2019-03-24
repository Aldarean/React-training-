import React from 'react';
import {Icon} from "office-ui-fabric-react/lib/Icon";

class TeamCardLogo extends React.Component {
    render() {
        return (
            <div className="team-card-logo">
                <Icon iconName="Group" className="team-card-logo__img" />
            </div>
        )
    }
}

export default TeamCardLogo;

