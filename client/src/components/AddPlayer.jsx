import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addNew } from "../services";
import { toast } from "react-toastify";
import AddImage from "./AddImage";
import FormPlayer from "../forms/FormPlayer";
import ButtonBack from "../buttons/ButtonBack";
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

        await addNew("players", fields);
        toast(`You have added ${playerName}!`);
        history.push("/");
    }

    return (
        <div className="text-gray-100">
            <ButtonBack />
            <div className="flex flex-col items-center">
                <h2 className="text-center mb-5 text-4xl">Add a new player!</h2>
                <FormPlayer
                    playerName={playerName} 
                    setPlayerName={setPlayerName} 
                    playerImage={playerImage}
                    setPlayerImage={setPlayerImage} 
                    handicap={handicap} 
                    setHandicap={setHandicap} 
                    handleSubmit={handleSubmit} 
                    title="Add Player"
                />
            </div>
        </div>
    )
}
