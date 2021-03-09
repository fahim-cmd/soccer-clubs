import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TeamCard = (props) => {
    const { strTeam, strTeamBadge, strSport } = props.team;

    return (
        <div className=' mb-5 '>
            <Card className='align-items-center justify-content-center p-3' style={{ width: '18rem', borderRadius: '13px'}}>
                <Card.Img className='w-75 ' variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title className='text-center'>{strTeam}</Card.Title>
                    <Card.Text >
                        Sports type: {strSport}
                    </Card.Text>
                    <div className='row justify-content-center'>
                        <Button variant="primary">explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamCard;