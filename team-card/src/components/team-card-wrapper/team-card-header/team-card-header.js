import React from 'react';
import TeamCardLogo from './team-card-logo/team-card-logo';

import {Icon} from "office-ui-fabric-react/lib/Icon";

class TeamCardHeader extends React.Component {
   
    render() {

        return (
            <div className="team-card-header">
                <TeamCardLogo />
  
                <div className="team-card-header__actions">
                    <Icon iconName="FavoriteStarFill" className="team-card-header__actions-favorite" />
                </div>

            </div>
        )
    }
}

export default TeamCardHeader;