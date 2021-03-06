import { useState, useEffect } from "react";
import { fetchList } from "../../services";
import { Link } from "react-router-dom";
import ButtonBack from "../buttons/ButtonBack";


export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const listPlayers = async() => {
            setPlayers(await fetchList("players"));
        };
        listPlayers();
    }, []);

    if (!players) return <h1>Loading</h1>

    return (
        <div>
            <ButtonBack location="/" />
            <div className="object-center text-center w-full flex flex-col items-center text-gray-100 mt-5">
                <h1 className="title">
                    Players
                </h1>
                <div className="flex w-full justify-center">
                    <div className="flex flex-col place-items-center w-3/4 sm:flex-row sm:flex-wrap sm:justify-around sm:items-center">
                        {players.map((player) => (
                            <div 
                                className="my-5 mx-4 flex justify-center sm:w-1/5"
                            >
                                <Link 
                                    class="pt-2" 
                                    to={`/players/${player.id}`}
                                    key={player.id}
                                >
                                    <div className="flex flex-col place-items-center h-40 w-40 sm:h-48 sm:w-48 hover text-gray-300 transform transition-transform hover:scale-125 sm:hover:scale-110">
                                        <div className="h-32 w-32 sm:h-40 sm:w-40 border-4  border-green-lt rounded-full overflow-hidden">
                                            <img 
                                                className="h-full w-full object-cover object-center" 
                                                src={player.fields?.playerImage} 
                                                key={player.id} 
                                                alt="player-profile"
                                            />
                                        </div>
                                        <div className="max-h-9 w-36 overflow-ellipsis">
                                            <div className="text-2xl max-h-9 w-36 overflow-ellipsis sm:text-3xl">
                                                {player.fields?.playerName}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
