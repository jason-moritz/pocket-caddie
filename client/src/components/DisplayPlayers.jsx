import { useState, useEffect } from "react";
import { getPlayers } from "../services";
import { Link } from "react-router-dom";
import ButtonBack from "../buttons/ButtonBack";


export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const listPlayers = async() => {
            setPlayers(await getPlayers());

        };
        listPlayers();
    }, []);

    if (!players) return <h1>Loading</h1>

    return (
        <div>
            <ButtonBack location="/" />
            <div className="object-center text-center text-gray-100 mt-5">
                <h1 className="text-4xl">Players</h1>
                <div className="flex flex-col place-items-center md:flex-row md:justify-center">
                    {players.map((player) => (
                        <div className="mt-5">
                            <Link class="pt-2" to={`/players/${player.id}`}>
                                <div className="flex flex-col place-items-center h-40 w-40 hover text-gray-300 transform transition-transform hover:scale-125">
                                    <div className="h-32  w-32 rounded-full overflow-hidden">
                                        <img className="h-full w-full object-cover object-center" src={player.fields?.playerImage} key={player.id} alt="player-profile"/>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">{player.fields?.playerName}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
