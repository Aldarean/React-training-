import React from 'react';
import TeamCardHeader from './team-card-header/team-card-header';

import axios  from 'axios'

class TeamCardWrapper extends React.Component {

    state = {
        teams: []
    }

    async componentDidMount()  {
        const team = [];
        await axios.get('https://reacttrainingapi220190317084903.azurewebsites.net/api/team')
            .then(function (response) {
                // handle success
                team.push(response.data)
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


            this.setState({'teams': team})
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
