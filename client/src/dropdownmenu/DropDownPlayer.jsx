import { useState, useEffect } from "react";
import { fetchPlayers, fetchPlayerDetails } from "../services";

export default function PlayerDropDown() {
    const [players, setPlayers] = useState([]);
    const [playerID, setPlayerID] = useState("rec16GtjMew2ERJKe");
    const [yardage, setYardage] = useState("");
    const [club, setClub] = useState("");

    useEffect(() => {
        const getPlayers = async() => {
            setPlayers(await fetchPlayers());
        };
        getPlayers();

    },[]);

    const findClub = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await fetchPlayerDetails(playerID);
        const arr = Object.values(res);
        arr.push(yardage);
        const sortedArr = arr.sort((a, b) => a - b);
        const yardageIndex = sortedArr.indexOf(yardage);
        console.log(yardageIndex);
        let clubYardage = sortedArr[yardageIndex + 1];
        setClub(findClub(res, clubYardage));
    };

    console.log(playerID);

    if (!players) return <h2>Loading</h2>

    return (
        <div className="w-screen  text-gray-100">
            <div className="flex flex-col place-items-center">
                <label>Select Player</label>
                <select className="bg-gray-100 rounded-md text-gray-md mt-5 w-2/3 max-w-2xl" onChange={e => setPlayerID(e.target.value)}>
                    {players.map((player) => (
                        <option key={player.id} value={player.id} className="bg-gray-100 text-gray-md leading-6 hover:bg-gray-200 focus:outline-none focus:shadow-outline rounded-md">{player.fields?.playerName}</option>
                    ))}
                </select>
                <label>Yardage Out</label>
                <form className="mt-5 w-2/3 max-w-2xl text-center" onSubmit={handleSubmit}>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={yardage} onChange={e => setYardage(e.target.value)}></input>
                    <button>Submit</button>
                </form>
                
                {club !== "" ? 
                    <div className="text-2xl text-center mt-5">
                        <h1>{`Don't be a hero. You need more club. Hit your ${club}.`}</h1>
                    </div>
                    :
                    null    
                }
            </div>
        </div>
    )
}
