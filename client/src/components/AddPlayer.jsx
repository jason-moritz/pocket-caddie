import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNew } from "../services";
import { toast } from "react-toastify";
import PlayerForm from "./PlayerForm";
import "react-toastify/dist/ReactToastify.css";


export default function AddPlayer() {
    const [playerName, setPlayerName] = useState("");
    const [playerImage, setPlayerImage] = useState("");
    const [handicap, setHandicap] = useState(0);
    const history = useHistory();

    

    const handleSubmit = async(e) => {
        e.preventDefault();

        const fields = {
            playerName,
            playerImage,
            handicap,
        };

        const res = await addNew(fields);
        console.log(res);
        toast(`You have added ${playerName}!`);
        history.push("/");
    }


    return (
        <div>
            <h2>Add a new player!</h2>
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
