import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addPlayer } from "../services";
import { toast } from "react-toastify";
import FormPlayer from "./FormPlayer";
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
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await addPlayer(fields);
        console.log(res);
        toast(`You have added ${playerName}!`);
        history.push("/");
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center m-5">Add a new player!</h2>
            <FormPlayer
                className="flex w-3/4"
                playerName={playerName} 
                setPlayerName={setPlayerName} 
                playerImage={playerImage}
                setPlayerImage={setPlayerImage} 
                handicap={handicap} 
                setHandicap={setHandicap} 
                handleSubmit={handleSubmit} 
                title="Add New Player"
            />
        </div>
    )
}
