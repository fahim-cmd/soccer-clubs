import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../TeamDetails/TeamDetails.css';
import TeamInfo from '../TeamInfo/TeamInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamDetails, setTeamDetails] = useState({})
    console.log(teamDetails)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}
        `;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [])

    const { strFacebook, strYoutube, strTwitter } = teamDetails;
    return (
        <div style={{ backgroundColor: "#fb743e" }}>
            <div className="stadium" >
                <img style={{ width: '14%' }} className=" h-100 py-4 d-block mx-auto" src={teamDetails.strTeamBadge} alt="" />
            </div>

            <div className="container">
                <div>
                    {
                        <TeamInfo teamDetails={teamDetails}></TeamInfo>
                    }
                </div>
            </div>

            <div className="container" style={{ color: "white" }}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum doloremque atque voluptas pariatur, architecto minus mollitia voluptatem aspernatur odit amet officiis magni ea nemo officia sequi consectetur tenetur itaque repellat odio neque perferendis nesciunt ab est! Consectetur nesciunt nulla laudantium nisi eveniet obcaecati at autem commodi itaque ipsam id porro, architecto sed quisquam! Enim quos doloremque aliquam accusantium, nobis animi vel quibusdam cum assumenda eos minus ducimus error incidunt placeat magni repudiandae. Adipisci molestias enim, incidunt hic veritatis distinctio odit, neque eligendi voluptas labore, pariatur reprehenderit iure perspiciatis. Quasi repudiandae a asperiores dolor harum necessitatibus obcaecati, eum tempora sint?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta placeat vel rerum delectus expedita enim fugiat labore. Ipsum rem temporibus obcaecati voluptatum excepturi! Odio temporibus, ad, modi distinctio quisquam delectus sint molestiae, rem ipsam nesciunt sit placeat voluptas doloribus illum nisi aperiam pariatur fugiat ab necessitatibus! Aut quia accusamus maiores possimus voluptatum iste quaerat corrupti quam, animi aliquam ea neque saepe, vero molestiae beatae repellat hic consectetur. Aliquam magni at amet obcaecati? Architecto nemo adipisci fugit quasi, doloribus at aspernatur nihil inventore maxime, consectetur repellendus aperiam recusandae aliquid ipsum blanditiis dolorem quo aliquam deleniti voluptas? Ex reiciendis est quos iusto?
                </p>
            </div>

            <footer className="container row justify-content-center my-4 mx-4 py-5 ">
                <a href={strFacebook}><FontAwesomeIcon className="socialIcon" icon={faFacebook} /> </a>
                <a href={strYoutube}> <FontAwesomeIcon className="socialIcon" icon={faYoutube} /></a>
                <a href={strTwitter}><FontAwesomeIcon className="socialIcon" icon={faTwitter} /> </a>
            </footer>
        </div>
    );
};

export default TeamDetails;