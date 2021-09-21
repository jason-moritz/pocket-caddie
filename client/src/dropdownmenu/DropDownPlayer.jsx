import { useState, useEffect } from "react";
import { fetchList } from "../services";

export default function DropDownPlayer(props) {
    const [players, setPlayers] = useState("");
    const { setPlayerID } = props;

    useEffect(() => {
        const getPlayers = async() => {
            setPlayers(await fetchList("players"));
        };
        getPlayers();

    },[]);

    if (!players) return <h2>Loading</h2>

    return (
        <div className="flex flex-col w-screen place-items-center">
            <label className="mt-5">Select Player</label>
                <select className="bg-gray-100 rounded-md text-gray-md w-2/3 max-w-2xl" onChange={e => setPlayerID(e.target.value)}>
                    {players.map((player) => (
                        <option key={player.id} value={player.id} className="bg-gray-100 text-gray-md leading-6 hover:bg-gray-200 focus:outline-none focus:shadow-outline rounded-md">{player.fields?.playerName}</option>
                    ))}
                </select>
        </div>
    )
}
