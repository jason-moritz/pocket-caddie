import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayerDetails } from "../services";


export default function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setPlayerDetails(await fetchPlayerDetails(id));
        };
        getDetails();
    }, []);

    if (!playerDetails) return <h2>Loading</h2>

    return (
        <div>
            <div>
                <img src={playerDetails.fields?.playerImage} alt="profile-pic" />
                <h2>{playerDetails.fields?.playerName}</h2>
                <h4>Handicap: {playerDetails.fields?.handicap}</h4>
            </div>
            <div>

            </div>
        </div>
    )
}
