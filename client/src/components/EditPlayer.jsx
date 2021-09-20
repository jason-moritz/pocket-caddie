import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchPlayerDetails, editPlayer } from "../services";
import FormPlayer from "./FormPlayer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditPlayer() {
    const [playerName, setPlayerName] = useState("");
    const [playerImage, setPlayerImage] = useState("");
    const [handicap, setHandicap] = useState(0);
    const history = useHistory();
    const { id } = useParams();

    const fields = {
        playerName,
        playerImage,
        handicap,
    };

    useEffect(() => {
        const getDetails = async() => {
            let res = await fetchPlayerDetails(id);
            setPlayerName(res.playerName);
            setPlayerImage(res.playerImage);
            setHandicap(res.handicap);
        };
        getDetails();
    }, [id]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        await editPlayer(id, fields);
        toast(`You have editted ${playerName}'s info!`);
        history.push(`/players/${id}`);
    }
    return (
        <div>
            <FormPlayer
                playerName={playerName} 
                setPlayerName={setPlayerName} 
                playerImage={playerImage}
                setPlayerImage={setPlayerImage} 
                handicap={handicap} 
                setHandicap={setHandicap} 
                handleSubmit={handleSubmit}
                title="Edit Player Info"
            />
        </div>
    )
}
