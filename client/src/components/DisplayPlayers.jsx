import { useState, useEffect } from "react";
import { getPlayers } from "../services";
import { Link } from "react-router-dom";


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
                    <>
                        <Link class="flex flex-col items-center pt-2" to={`/players/${player.id}`}>
                            <div className="block h-14 w-14 rounded-full overflow-hidden">
                                <img className="h-full w-full object-cover" src={player.fields?.playerImage} key={player.id} alt="player-profile"/>
                            </div>
                            <div>
                                <h3>{player.fields?.playerName}</h3>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    )
}
