import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchDetails, editDetails } from "../services";
import FormPlayer from "../forms/FormPlayer";
import ButtonBack from "../buttons/ButtonBack";
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
            let res = await fetchDetails("players", id);
            setPlayerName(res.playerName);
            setPlayerImage(res.playerImage);
            setHandicap(res.handicap);
        };
        getDetails();
    }, [id]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        await editDetails("players", id, fields);
        toast(`You have editted ${playerName}'s info!`);
        history.push(`/players/${id}`);
    };
    
    return (
        <div>
            <ButtonBack location={`/players/${id}`} />
            <div className="flex flex-col items-center text-gray-100">
                <h2 className="text-center mb-5 text-4xl">Edit Player Info</h2>
                <FormPlayer
                    playerName={playerName} 
                    setPlayerName={setPlayerName} 
                    playerImage={playerImage}
                    setPlayerImage={setPlayerImage} 
                    handicap={handicap} 
                    setHandicap={setHandicap} 
                    handleSubmit={handleSubmit}
                    title="Submit"
                />
            </div>
        </div>
    )
}
