import { useState, useEffect } from "axios";
import { useHistory } from "react-router-dom";
import { createPlayer } from "../services";
import { toast } from "react-toastify";
import PlayerForm from "./PlayerForm";
import "react-toastify/dist/ReactToastify.css";


export default function AddPlayer() {
    const [playerName, setPlayerName] = useState("");
    const [playerImage, setPlayerImage] = useState("");
    const [handicap, setHandicap] = useState("");
    const history = useHistory();

    const fields = {
        playerName,
        playerImage,
        handicap,
        history,
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await createPlayer(fields);
        toast(`You have added ${playerName}!`);
        history.push("/");
    }


    return (
        <div>
            <PlayerForm 
                playerName={playerName} 
                setPlayerName={setPlayerName} 
                playerImage={playerImage}
                setPlayerImage={setPlayerImage} 
                handicap={handicap} 
                setHandicap={setHandicap} 
                handleSubmit={handleSubmit} 
            />
        </div>
    )
}
