import { useState } from "react";


export default function PlayerForm(props) {
    const { playerName, setPlayerName, playerImage, setPlayerImage, handicap, setHandicap, handleSubmit, title } = props;
    const [toggle, setToggle] = useState(0);

    const handleToggle = (e) => {
        e.preventDefault();

        if (playerName === "") {
            setToggle((prevToggle) => prevToggle + 1);

        } else if (playerName) {
            setToggle(0)
        };
    };

    const twoCalls = (e) => {
        setPlayerName(e.target.value);
        setToggle(0);
    };
    
    return (
        <form className=" text-gray-100 w-screen mt-5" onSubmit={playerName !== "" ? handleSubmit : handleToggle}>
            <div className="flex justify-center">
                <div className="w-3/4 max-w-2xl">
                    <label>Player Name</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={playerName} onChange={twoCalls} />
                    {toggle > 0 ? <p className="text-sm text-red-500">Please enter a player name</p> : null} 
                    <label>Photo</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={playerImage} onChange={e => setPlayerImage(e.target.value)} />
                    <label>Handicap</label>
                    <input className="block shadow-lg appearance-none rounded-md mb-4  text-gray-md bg-gray-100 w-full leading-6 focus:outline-none focus:shadow-outline" value={handicap} onChange={e => setHandicap(e.target.value)} />
                    <div className="flex justify-center mb-4 ">
                        <button className=" hover:text-gray-300 click:text-gray-300">{title}</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
