import React, { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';

const Home = () => {

    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const newData = data.teams.slice(0, 20);
                setTeams(newData)
                // console.log(newData)
            })
    }, [])

    return (
        <div>
            <div>
                Team tracker
            </div>
            <div className='container'>
                <div className="row d-flex  justify-content-between mx-5 ">
                    {
                        teams.map(team => <TeamCard team={team} key={team.idTeam}></TeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;