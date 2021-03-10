import React from 'react';
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import male from '../../images/male.jpg';
import female from '../../images/female.jpg';

const TeamInfo = (props) => {
    const { strTeam, strGender, strCountry, intFormedYear, strSport } = props.teamDetails;

    let picture;

    strGender === "Male" ?
        picture = <img className="w-100 h-100 rounded" src={male} alt="" />

        : picture = <img className="w-100 h-100 rounded" src={female} alt="" />

    return (
        <div style={{ backgroundColor: '#f9f3f3' }} className="row d-flex justify-content-between my-5 p-4 rounded">
            <div className="col-12 col-sm-8 col-md-8">
                <h1>{strTeam} {strGender} </h1>
                <h5> <FontAwesomeIcon icon={faPodcast} />Founded: {intFormedYear}</h5>
                <h5> <FontAwesomeIcon icon={faFlag} />Country: {strCountry}</h5>
                <h5> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                <h5> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
            </div>
            <div className="col-12 col-sm-8 col-md-4">
                {
                    picture
                }
            </div>
        </div>
    );
};

export default TeamInfo;