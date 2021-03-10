import React, { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import '../Home/Home.css';

const Home = () => {

    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const newData = data.teams.slice(0, 20);
                setTeams(newData)
            })
    }, [])

    return (
        <div style={{ backgroundColor: "#1e212d" }}>
            <div className="homeImage">
                <h2 className="soccerPic">SOCCER CLUBS</h2>
            </div>
            <div className="container">
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