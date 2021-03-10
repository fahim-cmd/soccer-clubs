import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TeamCard = (props) => {
    // console.log(props.team)
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

 

    return (
        <div className=' mb-5 '>
            <Card className='align-items-center justify-content-center p-3' style={{ width: '18rem', borderRadius: '13px' }}>
                <Card.Img className='w-75 ' variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title className='text-center'>{strTeam}</Card.Title>
                    <Card.Text >
                        Sports type: {strSport}
                    </Card.Text>
                    <div className='row justify-content-center'>
                        <Link to={`/team/${idTeam}`}>
                            <Button variant="primary">explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCard;