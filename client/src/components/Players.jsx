import { useState, useEffect } from "react";
import { getPlayers } from "../services";


export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const listPlayers = async() => {
            setPlayers(await getPlayers());

        };
        listPlayers();
    }, []);

    console.log(players)

    if (!players) return <h1>Loading</h1>

    return (
        <div className="object-center text-center">
            <h1>Players</h1>
            <div className="grid grid-cols-2">
                {players.map((player) => (
                    <div className="grid grid-cols-1 justify-items-center">
                        <img className="max-h-30" src={player.fields?.playerImage} key={player.id} alt="player-profile"/>
                        <h3>{player.fields?.playerName}</h3>
                    </div>
                ))};
            </div>
        </div>
    )
}
