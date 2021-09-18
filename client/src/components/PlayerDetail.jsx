import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DisplayYardages from "./DisplayYardages";
import DeleteButton from "./DeleteButton";
import { fetchPlayerDetails } from "../services";


export default function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async() => {
            setPlayerDetails(await fetchPlayerDetails(id));
        };
        getDetails();
    }, [id]);

    if (!playerDetails) return <h2>Loading</h2>

    return (
        <div className="grid grid-cols-2">
            <div>
                <img src={playerDetails?.playerImage} alt="profile-pic" />
                <h2>{playerDetails?.playerName}</h2>
                <h4>Handicap: {playerDetails?.handicap}</h4>
                <Link key={id} to={`/players/${id}/edit`}>
                    <button>Edit Player Info</button>
                </Link>
                <DeleteButton id={id} group="players" title={playerDetails?.playerName} />
            </div>
            <div>
                <DisplayYardages />
            </div>
        </div>
    )
}
