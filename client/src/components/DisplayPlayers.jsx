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
            <h1 className="text-4xl">Players</h1>
            <div className="flex flex-col flex-wrap">
                {players.map((player) => (
                    <>
                        <Link class="flex flex-col items-center pt-2" to={`/players/${player.id}`}>
                            <div className="block h-20   w-20 rounded-full overflow-hidden transform hover:scale-125">
                                <img className="h-full w-full object-cover object-center" src={player.fields?.playerImage} key={player.id} alt="player-profile"/>
                            </div>
                            <div>
                                <h3 className="text-2xl hover:text-indigo-200 transform hover:scale-125 ">{player.fields?.playerName}</h3>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
            <div className="bottom-0 mt-5">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
