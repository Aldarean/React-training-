import React from 'react';
import TeamCardHeader from './team-card-header/team-card-header';


class TeamCardWrapper extends React.Component {

    state = {
        teams: [
            {
                id: "001f3d9f-0d44-43d1-8a86-b43575e4e0e1",
                title: "React team",
                description: "Where devs and React meet",
                mailEnabled: false,
                mail: null,
                teamUrl: "https://www.google.nl/#",
                imageUrl: null,
                photo: null,
                isTeam: true,
                isFavorite: true,
                isMetadataComplete: true,
                sequence: 2,
                members: [
                    {
                        Name: "Karen Berg",
                        image: "karenb.jpg"
                    },
                    {
                        Name: "Julien Islo",
                        image: "julieni.jpg"
                    }
                ]
            }
        ]
    }

    render() {


        let teams = [];
        if (this.state.teams.length > 0) {
            teams = this.state.teams.map(team => {
                return (
                    <section className="team-card-body" key={team.id}>
                        <p className="team-card-body__title">{team.title}</p>
                        <p>Leden: <span>{team.members.length}</span></p>
                        <ul>
                          <li>foto 1</li>
                          <li>foto 2</li>
                        </ul>
                        <p>{team.description}</p>
                    </section>
                )
            });
        } else {
            teams = 'No teams'
        }

        return (
            <div className="team-card-wrapper">
                <TeamCardHeader />
                { teams}
            </div>
        )
    }
}

export default TeamCardWrapper;
