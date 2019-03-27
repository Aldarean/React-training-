import React from 'react';

class TeamCardAvatar extends React.Component {
    render() {
        console.log(this.props)

        let members = this.props.members.map(member => {
            return (
                <li key={member.Name}> 
                   <img src={require(`../../../assets/images/${member.image}`)} 
                        alt={member.Name} 
                        title={member.Name} 
                        className="team-card-body__member-avatar" />
            </li>
            )
        });

        return (
            <React.Fragment>
                {members}
            </React.Fragment>
        )
    }
}

export default TeamCardAvatar;